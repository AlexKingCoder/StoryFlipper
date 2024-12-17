const palabras = [
    "pingüino", "mesa", "tesoro", "antorcha", 
    "moneda", "globo", "laboratorio", "generador",
    "espada", "poción", "criatura", "capa", "princesa",
    "sapo", "chocolate", "música", "medalla", "ropa", "taberna",
    "pierna", "insomnio", "garganta", "voto", "pizarra", "cliente",
    "agujero", "verdura", "padre", "fiesta", "noche", "pañal", "basura",
    "fosa", "bala", "disco", "obra", "chiste", "azotea", "relámpago",
    "riachuelo", "herido", "flotar", "gemelo", "hermano", "pintura",
    "silla", "deshidratado", "monstruo", "cerbatana", "tijeras", "reglas",
    "anillo", "recetas", "enfermedad", "perlas", "sonajero", "volcar",
    "costillas", "mermelada", "etapa", "biblioteca", "morir", "enano",
    "espalda", "vida", "bailar", "sable", "famoso", "aplaudir", "mezclar"
];

function obtenerPalabrasAleatorias() {
    const palabrasAleatorias = [];
    const indicesUsados = new Set();

    while (palabrasAleatorias.length < 3) {
        const indiceAleatorio = Math.floor(Math.random() * palabras.length);
        if (!indicesUsados.has(indiceAleatorio)) {
            indicesUsados.add(indiceAleatorio);
            palabrasAleatorias.push(palabras[indiceAleatorio]);
        }
    }

    return palabrasAleatorias;
}

const div3 = document.getElementById("words");

import { generarColorAleatorio } from "./index.js";

function mostrarPalabras() {
    div3.style.backgroundColor = generarColorAleatorio();
    const palabrasSeleccionadas = obtenerPalabrasAleatorias();
    
    const wordsDiv = document.getElementById("words");
    wordsDiv.innerHTML = `
        <p><strong>Las palabras que debes utilizar son:</strong></p>
        <p>${palabrasSeleccionadas.join(", ")}</p>
    `;
}

document.getElementById("generateButton").addEventListener("click", mostrarPalabras);