const items = [
    {
        nombre: "Deseo",
        foto: "./items/deseo.jpg",
        descripcion: "Al inicio de tu historia, obtienes un pedazo de estrella que te proporcionará un deseo cuando tú quieras pedirlo."
    },
    {
        nombre: "Jetpack",
        foto: "./items/jetpack.jpg",
        descripcion: "Encuentras una vieja mochila propulsora. Parece muy antigua, pero parece que puedes usarla una sola vez."
    },
    {
        nombre: "Casco de Hades",
        foto: "./items/cascoDeHades.jpg",
        descripcion: "Esta invención terrícola te permite hacerte invisible una vez durante el relato."
    },
    {
        nombre: "Poción del Loto",
        foto: "./items/pocionDelLoto.jpg",
        descripcion: "Tomar esta poción te permitirá caminar sobre el agua."
    },
    {
        nombre: "Sincrómetro",
        foto: "./items/sincrometro.jpg",
        descripcion: "Este curioso artilugio te permitirá retroceder siete segundos en el tiempo si lo necesitas."
    },
    {
        nombre: "Khain, el hacha del traidor",
        foto: "./items/khainElHachaDelTraidor.jpg",
        descripcion: "Durante tu historia, encontrarás este hacha mágica con voz propia. Te ayudará cuando lo necesites, pero también tratará de manipularte para que te vuelvas malvado."
    },
    {
        nombre: "Cápsula Dimensional",
        foto: "./items/capsulaDimensional.jpg",
        descripcion: "Este artefecto te permite encerrar una criatura u objeto que desees en su interior. Puedes liberar lo que encierres en ella más adelante si lo deseas."
    }
]

function obtenerItemAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * items.length);
    return items[indiceAleatorio];
}

const div = document.getElementById("item");

import { generarColorAleatorio } from "./index.js";
const body = document.body;

function mostrarItem() {
    div.style.backgroundColor = generarColorAleatorio();
    const item = obtenerItemAleatorio();

    const itemDiv = document.getElementById("item");
    itemDiv.innerHTML = `
        <img src="${item.foto}" alt="${item.nombre}" style="width: 100px; height: auto;" class="fade-in" id="itemImage">
        <h3>${item.nombre}</h3>
        <p><strong>Objeto:</strong><br>${item.descripcion}</p>
    `;

    const itemImg = document.getElementById("itemImage");

    itemImg.addEventListener('load', () => {
        itemImg.classList.add('loaded');
    });
}

document.getElementById("generateButton").addEventListener("click", mostrarItem);