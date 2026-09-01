// Animação GSAP da Cabeça Girando
const headTween = gsap.to("#img", {
    rotation: 360,
    duration: 8,
    ease: "none",
    repeat: -1
});

// Funções interativas de controle
function setSpeed(speed) {
    headTween.timeScale(speed);
}

function toggleAnimation() {
    if (headTween.paused()) {
        headTween.play();
    } else {
        headTween.pause();
    }
}