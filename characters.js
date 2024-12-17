const personajes = [
    {
        nombre: "Yukiro",
        foto: "./characters/yukiro.jpg",
        descripcion: "Este chico tiene la habilidad de hablar con las estrellas. Muchos de su lugar natal lo toman por loco, así que tiene pocos amigos.",
        motivacion: "Quiere averiguar más sobre su extraño poder y cómo usarlo para ayudar a los demás."
    },
    {
        nombre: "Maya",
        foto: "./characters/maya.jpg",
        descripcion: "Una chica sensible e introvertida. Ama la naturaleza y trata de ayudar a los demás siempre que puede.",
        motivacion: "Viaja por toda la galaxia para encontrar flores en peligro de extinción."
    },
    {
        nombre: "Lobo",
        foto: "./characters/lobo.jpg",
        descripcion: "Lobo es un mercenario al servicio de su clan que elimina individuos peligrosos por toda la galaxia. Tiene un pasado oscuro que le atormenta. Posee la capacidad de fundirse en las sombras.",
        motivacion: "Le han enviado a este mundo para eliminar a un objetivo muy importante."
    },
    {
        nombre: "Alex",
        foto: "./characters/alex.jpg",
        descripcion: "Alex es un joven estudiante que viaja por todos los planetas para aprender sus secretos. Es ingenioso y un superviviente nato, aunque tiene un sentido del humor algo sarcástico.",
        motivacion: "Quiere descubrir un secreto que nadie en toda la galaxia conozca."
    },
    {
        nombre: "Canary",
        foto: "./characters/canary.jpg",
        descripcion: "Canary es una chica resuelta y un poco testaruda. También es una gran luchadora. Va siempre acompañada de su canario rojo, que le ayuda a no meterse en demasiados líos.",
        motivacion: "Viaja por toda la galaxia buscando a un digno rival."
    },
    {
        nombre: "Dako",
        foto: "./characters/dako.jpg",
        descripcion: "Dako es un joven que huyó de su planeta cuando destruyeron su ciudad. Desde entonces huye de mundo en mundo escapando de sus perseguidores. Es muy reservado y un poco desconfiado.",
        motivación: "En el fondo, desearía encontrar a un amigo de confianza y un lugar tranquilo en el que vivir."
    },
    {
        nombre: "Nina",
        foto: "./characters/nina.jpg",
        descripcion: "Nina es una chica juguetona. Posee el don de congelar las cosas con sus manos. Por sus travesuras, su familia la echó de su planeta natal.",
        motivacion: "Nina intenta controlar su poder y encontrarle una utilidad para regresar a su hogar."
    },
    {
        nombre: "Esmerilda",
        foto: "./characters/esmerilda.jpg",
        descripcion: "Esmerilda es una princesa guerrera de Tapion. Es fiel, leal a sus propósitos y a la gente, aunque un poco exigente. La joya que porta en su pecho le da fuerza sobrehumana.",
        motivacion: "El Rey de Tapion le ha encargado una misión y está decidida a cumplirla a toda costa."
    },
    {
        nombre: "Charlie",
        foto: "./characters/charlie.jpg",
        descripcion: "Charlie es un joven procedente de la Tierra que entró por un portal dimensional por accidente, acompañado de su gato. Es un poco asustadizo, pero le apasiona descubrir nuevas experiencias.",
        motivacion: "Desea encontrar el modo de volver a casa antes de meterse en demasiados líos..."
    },
    {
        nombre: "Zakya",
        foto: "./characters/zakya.jpg",
        descripcion: "Zakya se creó como una inteligencia artificial en Ciudad Byte. Es algo fría y ruda, pero tiene facilidad para reirse de los chistes.",
        motivacion: "Desea encontrar la forma de sentirse humana de verdad."
    }
];

function obtenerPersonajeAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * personajes.length);
    return personajes[indiceAleatorio];
}

const div = document.getElementById("character");

import { generarColorAleatorio } from "./index.js";
const body = document.body;

function mostrarPersonaje() {
    div.style.backgroundColor = generarColorAleatorio();
    body.style.animationPlayState = 'paused';
    const personaje = obtenerPersonajeAleatorio();

    const characterDiv = document.getElementById("character");
    characterDiv.innerHTML = `
        <img src="${personaje.foto}" alt="${personaje.nombre}" style="width: 200px; height: auto;" class="fade-in" id="characterImage">
        <h3>${personaje.nombre}</h3>
        <p><strong>Quién es:</strong><br>${personaje.descripcion}</p>
        <p><strong>Motivación:</strong><br>${personaje.motivacion}</p>
    `;
    
    const characterImg = document.getElementById("characterImage");

    characterImg.addEventListener('load', () => {
        characterImg.classList.add('loaded');
    });
}

document.getElementById("generateButton").addEventListener("click", mostrarPersonaje);