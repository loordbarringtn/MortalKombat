const arenasElement= document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const player1 = {
    id: 1,
    name: 'Kitana',
    hp: 100,
    img: './assets/images/kitana.gif',
    weapon: ['Steel Fans', 'Flying Blade', 'Bō','Triblade','Sai'],
    attack: attack,
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP
};

const player2 = {
    id: 2,
    name: 'Liu Kang',
    hp: 100,
    img: './assets/images/liukang.gif',
    weapon: ['Dragon Sword', 'Nunchaku', 'Houan Chains'],
    attack: attack,
    changeHP: changeHP,
    elHP: elHP,
    renderHP: renderHP
};

function attack() {
    console.log(this.name + ' Fight...');
}

function createElement(tag, className) {
    const tagElement =  document.createElement(tag);
    if (className) {
        tagElement.classList.add(className);
    }
    return tagElement;
}

function createPlayer(player) {
    const playerElement = createElement('div', `player${player.id}`);
    const progressbarEl = createElement('div', 'progressbar');
    const lifeElement = createElement('div', 'life');
    const nameElement = createElement('div', 'name');
    const characterElement = document.createElement('div');
    const imageElement= createElement('img');

    lifeElement.style.width = `${player.hp}%`;
    nameElement.innerText = player.name;
    progressbarEl.appendChild(lifeElement);
    progressbarEl.appendChild(nameElement)
    characterElement.classList.add('character');
    imageElement.src = player.img;
    characterElement.appendChild(imageElement);
    playerElement.appendChild(progressbarEl);
    playerElement.appendChild(characterElement);
    return playerElement;
}

arenasElement.appendChild(createPlayer(player1));
arenasElement.appendChild(createPlayer(player2));

function showResultText(name) {
    const  loseTitle = createElement('div', 'loseTitle');
    if (name) {
        loseTitle.innerText = `${name} + wins!`;
    } else {
        loseTitle.innerText = 'draw!';
    }
    return loseTitle;
}

function getRandomValue(limit) {
    return Math.ceil(Math.random() * limit);
}

function renderHP() {
    return this.elHP().style.width = this.hp + `%`;
}

function elHP() {
    return document.querySelector(`.player${this.id} .life`);
}

function changeHP(damage) {
    this.hp -= damage;

    if (this.hp <=0) {
        this.hp = 0;
    }
}

function createReloadButton() {
    const reloadWrap = createElement('div', 'reloadWrap');
    const reloadButton = createElement('button', 'button');
    reloadButton.innerText = 'Restart';
    reloadWrap.appendChild(reloadButton);
    return reloadWrap;
}

function handleGameResult() {
    if (player1.hp === 0 || player2.hp === 0) {
        randomButton.disabled = true;
        const reloadButton = createReloadButton();

        reloadButton.addEventListener('click', function () {
            window.location.reload();
        })

        arenasElement.appendChild(reloadButton);
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        arenasElement.appendChild(showResultText(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        arenasElement.appendChild(showResultText(player1.name));
    } else if (player1.hp === 0 && player2.hp === 0) {
        arenasElement.appendChild(showResultText());
    }
}

randomButton.addEventListener('click', function () {
    player1.changeHP(getRandomValue(20));
    player2.changeHP(getRandomValue(20));
    player1.renderHP();
    player2.renderHP();
    handleGameResult();
});
