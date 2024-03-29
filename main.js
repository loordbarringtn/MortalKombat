const arenasElement= document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

const player1 = {
    id: 1,
    name: 'Kitana',
    hp: 100,
    img: './assets/images/kitana.gif',
    weapon: ['Steel Fans', 'Flying Blade', 'Bō','Triblade','Sai'],
    attack: function () {
        console.log(name + ' Fight...')
    }
};

const player2 = {
    id: 2,
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

function playerWin(name) {
    const  loseTitle = createElement('div', 'loseTitle');
    loseTitle.innerText = `${name} + wins!`;
    return loseTitle;
}

function changeHP(player) {
    player.hp -= Math.ceil(Math.random() * 20);
    const playerLife = document.querySelector(`.player${player.id} .life`);
    playerLife.style.width = player.hp + '%';
}

function handleGameResult(player1, player2) {
    let winner, loser;

    if (player1.hp <= 0) {
        winner = player2;
        loser = player1;
    } else if (player2.hp <= 0) {
        winner = player1;
        loser = player2;
    }

    if (loser) {
        const looserLife = document.querySelector('.player' + loser.id + ' .life');
        arenasElement.appendChild(playerWin(winner.name));
        looserLife.style.width = 0 + '%';
        randomButton.disabled = true;
    }
}

randomButton.addEventListener('click', function () {
    changeHP(player1);
    changeHP(player2);
    handleGameResult(player1, player2);
});
