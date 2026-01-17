let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let content = document.querySelector('#content');
let body = document.body;


selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        body.style.backgroundColor = '#1a1a1a';
        body.style.color = 'white';
        content.style.borderColor = 'white';
        logo.src = 'https://wddbyui.github.io/wdd131/images/byui-logo-white.png';
    } else {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        content.style.borderColor = 'black';
        logo.src = 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp';
    }
}
