// Mapeamento de teclas para sons
const soundMap = {
    "A": "sounds/leftCrash.mp3",
    "S": "sounds/tom1.mp3",
    "D": "sounds/snare.mp3",
    "G": "sounds/kickbass.mp3",
    "J": "sounds/tom3.mp3",
    "K": "sounds/tom2.mp3",
    "L": "sounds/rightCrash.mp3"
};

// Função para tocar som e animar o botão
function playSoundAndAnimate(key) {
    const sound = soundMap[key.toUpperCase()];
    if (sound) {
        new Audio(sound).play();
        animateButton(key);
    }
}

// Função para animar o botão
function animateButton(currentKey) {
    const activeButton = document.querySelector(`.${currentKey}`);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(() => activeButton.classList.remove("pressed"), 100);
    }
}

// Adiciona ouvintes de eventos a botões e teclas
document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", () => playSoundAndAnimate(button.innerHTML));
});

document.addEventListener("keypress", event => playSoundAndAnimate(event.key));
