const name1 = {
    name: "JohnnyCage",
    hp: 190,
    img: "./assets/images/johnny-cage-hd-sprite2-cancelled-project.gif",
    weapon: ["Brass Knuckles", "Bowie Knife", "Pistol","Nunchaku","$500 Sunglasses"],
    attack: function () {
        console.log(name + " Fight...")
    }
};

const name2 = {
    name: "ShangTsung",
    hp: 210,
    img: "./assets/images/shang-mk3-stance.gif",
    weapon: ["Straight Sword", "Ancient Scroll", "Soul Phylactery"],
    attack: function () {
        console.log(name + " Fight...")
    }
};

function createPlayer(className, objectName) {
    const $player1 = document.createElement("div");
    $player1.classList.add(className);
    const $progressbar = document.createElement("div");
    $progressbar.classList.add("progressbar");
    const $life = document.createElement("div");
    $life.classList.add("life");
    $life.style.width = `${objectName.hp}%`;
    const $name = document.createElement("div");
    $name.classList.add(objectName.name);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name)
    const $character = document.createElement("div");
    $character.classList.add("character");
    const $img = document.createElement("img");
    $img.src = objectName.img;
    $character.appendChild($img);
    $player1.appendChild($progressbar);
    $player1.appendChild($character);

    document.querySelector('.arenas').appendChild($player1);
}
createPlayer("player1", name1);
createPlayer("player2", name2);