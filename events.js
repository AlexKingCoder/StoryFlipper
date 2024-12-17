const eventos = [
    {
        nombre: "Último Aliento",
        foto: "./events/ultimoAliento.jpg",
        descripcion: "Tu personaje morirá al final de la historia. ¡Vive la aventura al máximo y crea un final épico!"
    },
    {
        nombre: "La Caída al Lado Oscuro",
        foto: "./events/laCaidaAlLadoOscuro.jpg",
        descripcion: "tu personaje se volverá malo en esta historia. ¿Cómo relatarás tu caída a la oscuridad? ¿Lograrás salvarte de ella?"
    },
    {
        nombre: "Llega el Némesis",
        foto: "./events/llegaElNemesis.jpg",
        descripcion: "Un implacable enemigo te perseguirá sin descanso a lo largo de esta historia. ¿Podrás derrotarlo?"
    },
    {
        nombre: "La Decisión",
        foto: "./events/laDecision.jpg",
        descripcion: "Encontrarás a un buen amigo en esta historia. Pero llegado el momento, tendrás que decidir salvarlo, o sacrificarlo por un bien mayor."
    },
    {
        nombre: "Paradoja Temporal",
        foto: "./events/paradojaTemporal.jpg",
        descripcion: "En esta historia te encontrarás con tu yo del futuro. ¿Qué destino te aguarda? ¿Podrás cambiarlo?"
    },
    {
        nombre: "El Protegido",
        foto: "./events/elProtegido.jpg",
        descripcion: "Encontrarás a un personaje acusado y perseguido por todos. Decides protegerlo, pero... ¿estarás haciendo lo correcto?"
    },
    {
        nombre: "Hermano Mayor",
        foto: "./events/hermanoMayor.jpg",
        descripcion: "Te encontrarás a un personaje huérfano en esta historia. Enseguida te ganas su admiración, y tendrás que cuidar de él durante todo el relato."
    },
    {
        nombre: "La Flecha de Cupido",
        foto: "./events/laFlechaDeCupido.jpg",
        descripcion: "Encontrarás a un personaje en esta historia del que te enamorarás, y ello afectará al resto del relato. ¿Cómo finalizará tu romance?"
    },
    {
        nombre: "Cuenta Atrás",
        foto: "./events/cuentaAtras.jpg",
        descripcion: "Al empezar el relato, te infectas con un veneno letal. Deberás encontrar un antídoto antes de finalizar la historia. ¿Podrás salvarte a tiempo?"
    },
    {
        nombre: "Que llueva, que llueva",
        foto: "./events/queLlueva.jpg",
        descripcion: "Durante la historia, tendrá lugar una lluvia de meteoritos. ¿Cómo afectará este evento a tu aventura?"
    },
    {
        nombre: "¿Miedo a la Oscuridad?",
        foto: "./events/miedoALaOscuridad.jpg",
        descripcion: "Al empezar la historia, un villano te echa una maldición. Deberás permanecer cerca de la luz durante toda la historia. De lo contrario, la sangre de tu cuerpo comenzará a helarse y perecerás."
    }
];

function obtenerEventoAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * eventos.length);
    return eventos[indiceAleatorio];
}

const div = document.getElementById("event");

import { generarColorAleatorio } from "./index.js";
const body = document.body;

function mostrarEvento() {
    div.style.backgroundColor = generarColorAleatorio();
    const evento = obtenerEventoAleatorio();

    const eventDiv = document.getElementById("event");
    eventDiv.innerHTML = `
        <img src="${evento.foto}" alt="${evento.nombre}" style="width: 100px; height: auto;" class="fade-in" id="eventImage">
        <h3>${evento.nombre}</h3>
        <p><strong>Evento:</strong><br>${evento.descripcion}</p>
    `;
    
    const eventImg = document.getElementById("eventImage");

    eventImg.addEventListener('load', () => {
        eventImg.classList.add('loaded');
    });
}

document.getElementById("generateButton").addEventListener("click", mostrarEvento);