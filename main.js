const arenasElement= document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Kitana',
    hp: 100,
    img: './assets/images/kitana.gif',
    weapon: ['Steel Fans', 'Flying Blade', 'Bō','Triblade','Sai'],
    attack: function () {
        console.log(name + ' Fight...')
    }
};

const player2 = {
    player: 2,
    name: 'Liu Kang',
    hp: 100,
    img: './assets/images/liukang.gif',
    weapon: ['Dragon Sword', 'Nunchaku', 'Houan Chains'],
    attack: function () {
        console.log(name + ' Fight...')
    }
};

function createElement(tag, className) {
    const tagElement =  document.createElement(tag);
    if (className) {
        tagElement.classList.add(className);
    }
    return tagElement;
}

function createPlayer(player) {
    const playerElement = createElement('div', 'player'+player.player);
    const progressbarEl = createElement('div', 'progressbar');
    const lifeElement = createElement('div', 'life');
    lifeElement.style.width = `${player.hp}%`;
    const nameElement = createElement('div', 'name');
    nameElement.innerText = player.name;
    progressbarEl.appendChild(lifeElement);
    progressbarEl.appendChild(nameElement)
    const characterElement = document.createElement('div');
    characterElement.classList.add('character');
    const imageElement= createElement('img');
    imageElement.src = player.img;
    characterElement.appendChild(imageElement);
    playerElement.appendChild(progressbarEl);
    playerElement.appendChild(characterElement);
    return playerElement;
}

arenasElement.appendChild(createPlayer(player1));
arenasElement.appendChild(createPlayer(player2));

function playerLoose(name) {
    const  loseTitle = createElement('div', 'loseTitle');
    loseTitle.innerText = name + ' lose';
    return loseTitle;
}

function playerWin(name) {
    const  loseTitle = createElement('div', 'loseTitle');
    loseTitle.innerText = name + ' wins!';
    return loseTitle;
}

function changeHP(player) {
    const playerLife = document.querySelector('.player'+player.player+' .life');
    player.hp -= Math.ceil(Math.random()*20);
    playerLife.style.width = player.hp + '%';
    if (player.hp <= 0) {
        const winPlayer = player.player === 1 ? player2 : player1;
        arenasElement.appendChild(playerWin(winPlayer.name));
        playerLife.style.width = 0+'%';
        randomButton.disabled = true
    }
}

randomButton.addEventListener('click', function () {
    changeHP(player1);
    changeHP(player2);
})