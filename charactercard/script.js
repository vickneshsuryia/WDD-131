const aStats = {
    name: 'Snortleblat',
    charClass: 'Swamp Beast Diplomat',
    level: 8,
    health: 100,
    image: 'snortleblat.webp',
    attacked(){
        this.health = this.health - 20;
        document.querySelector('#health').textContent = this.health;
        if (this.health <= 0) {
            alert("The character dies");
        }
    },
    levelUp(){
        this.level = this.level + 1;
        document.querySelector('#level').textContent = this.level;
    }
}


document.querySelector('.name').textContent = aStats.name;
document.querySelector('#charClass').textContent = aStats.charClass;
document.querySelector('#level').textContent = aStats.level;
document.querySelector('#health').textContent = aStats.health;
document.querySelector('.image').src = aStats.image;
document.querySelector('.image').alt = aStats.name;

document.querySelector('#button1').addEventListener('click', function() {
    aStats.attacked();
});

document.querySelector('#button2').addEventListener('click', function() {
    aStats.levelUp();
});




