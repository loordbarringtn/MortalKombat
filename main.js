const name1 = {
    name: 'Kitana',
    hp: 100,
    img: './assets/images/kitana.gif',
    weapon: ['Steel Fans', 'Flying Blade', 'Bō','Triblade','Sai'],
    attack: function () {
        console.log(name + ' Fight...')
    }
};

const name2 = {
    name: 'LiuKang',
    hp: 100,
    img: './assets/images/liukang.gif',
    weapon: ['Dragon Sword', 'Nunchaku', 'Houan Chains'],
    attack: function () {
        console.log(name + ' Fight...')
    }
};

function createPlayer(className, player) {
    const playerElement = document.createElement('div');
    playerElement.classList.add(className);
    const progressbarEl = document.createElement('div');
    progressbarEl.classList.add('progressbar');
    const lifeElement = document.createElement('div');
    lifeElement.classList.add('life');
    lifeElement.style.width = `${player.hp}%`;
    const nameElement = document.createElement('div');
    nameElement.innerText = player.name;
    nameElement.classList.add('name');
    progressbarEl.appendChild(lifeElement);
    progressbarEl.appendChild(nameElement)
    const characterElement = document.createElement('div');
    characterElement.classList.add('character');
    const imageElement = document.createElement('img');
    imageElement.src = player.img;
    characterElement.appendChild(imageElement);
    playerElement.appendChild(progressbarEl);
    playerElement.appendChild(characterElement);

    document.querySelector('.arenas').appendChild(playerElement);
}
createPlayer('player1', name1);
createPlayer('player2', name2);