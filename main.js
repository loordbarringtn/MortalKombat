const arenasElement= document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const player1 = {
    id: 1,
    name: 'Kitana',
    hp: 100,
    img: './assets/images/kitana.gif',
    weapon: ['Steel Fans', 'Flying Blade', 'Bō','Triblade','Sai'],
    attack: attack
};

const player2 = {
    id: 2,
    name: 'Liu Kang',
    hp: 100,
    img: './assets/images/liukang.gif',
    weapon: ['Dragon Sword', 'Nunchaku', 'Houan Chains'],
    attack: attack
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

function changeHP(player) {
    player.hp -= getRandomValue(20);
    const playerLife = document.querySelector(`.player${player.id} .life`);
    if (player.hp <=0) {
        player.hp = 0;
    }
    playerLife.style.width = player.hp + '%';
}

function handleGameResult() {
    if (player1.hp === 0 || player2.hp === 0) {
        randomButton.disabled = true;
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
    changeHP(player1);
    changeHP(player2);
    handleGameResult();
});
