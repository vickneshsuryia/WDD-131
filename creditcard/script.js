const theForm = document.querySelector('#checkoutForm');
const cardNumberInput = document.querySelector('#cardNumber');
const cardHolderInput = document.querySelector('#cardHolder');
const expMonthInput = document.querySelector('#expMonth');
const expYearInput = document.querySelector('#expYear');
const cvcInput = document.querySelector('#cvc');
const errorsSection = document.querySelector('.errors');

cardNumberInput.addEventListener('input', function () {
    let digits = this.value.replace(/\D/g, '');
    let formatted = digits.match(/.{1,4}/g);
    this.value = formatted ? formatted.join(' ') : '';
});

function displayError(msg) {
    errorsSection.textContent = msg;
}

function isCardNumberValid(number) {
    return number === '1234123412341234';
}

function submitHandler(event) {
    event.preventDefault();
    displayError('');

    let errorMsg = '';

    const holderName = cardHolderInput.value.trim();
    if (holderName === '') {
        errorMsg += 'Card holder name is required\n';
    }

    const rawNumber = cardNumberInput.value.replace(/\s/g, '');
    if (!/^\d{16}$/.test(rawNumber)) {
        errorMsg += 'Card number must be 16 digits\n';
    } else if (!isCardNumberValid(rawNumber)) {
        errorMsg += 'Card number is not valid\n';
    }

    const cvcValue = cvcInput.value.trim();
    if (!/^\d{3}$/.test(cvcValue)) {
        errorMsg += 'CVC/CVV must be 3 digits\n';
    }

    const expMonth = Number(expMonthInput.value);
    const expYear = Number(expYearInput.value);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    if (
        isNaN(expMonth) || isNaN(expYear) ||
        expMonth < 1 || expMonth > 12 ||
        expYear < currentYear ||
        (expYear === currentYear && expMonth < currentMonth)
    ) {
        errorMsg += 'Card is expired or expiry date is invalid\n';
    }

    if (errorMsg !== '') {
        displayError(errorMsg);
        return;
    }

    const cardWrapper = document.querySelector('#cardWrapper');
    cardWrapper.innerHTML = '<h2>Thank you for your purchase!</h2><p>Your order has been placed successfully.</p>';
}

theForm.addEventListener('submit', submitHandler);