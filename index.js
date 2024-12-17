export function generarColorAleatorio() {
    const rojo = Math.floor(Math.random() * 256);
    const verde = Math.floor(Math.random() * 256);
    const azul = Math.floor(Math.random() * 256);
    return `rgba(${rojo}, ${verde}, ${azul}, 0.95)`;
}

const epicActive = document.getElementById('epicActive');
const epicMode = document.querySelector('.epicMode');

epicActive.addEventListener('change', function() {
    if (this.checked) {
        epicMode.classList.add('on');
    } else {
        epicMode.classList.remove('on');
    }
});