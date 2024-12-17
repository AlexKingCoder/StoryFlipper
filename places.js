const places = [
    {
        nombre: "Planeta Tapion, Desierto del Cactus",
        foto: "./places/planetaTapion-DesiertoDelCactus.jpg",
        descripcion: "Este desierto queda muy lejos de la civilización. Parece un lugar inhóspito, pero hay muchos secretos bajo su superficie... ",
    },
    {
        nombre: "Planeta Tapion, Reino de Eternia",
        foto: "./places/planetaTapion-ReinoDeEternia.jpg",
        descripcion: "Esta próspera ciudad aloja a los altos dignatarios de Tapion. Un hermoso rio atraviesa sus castillos y desemboca en el mar."
    },
    {
        nombre: "Planeta Eris, Bosque de la noche",
        foto: "./places/planetaEris-BosqueDelEspiritu.jpg",
        descripcion: "Este bosque se encuentra en la cara oculta de Eris, por lo que ahí siempre es de noche. Los árboles se han acostumbrado a la falta de luz, y han generado sus propias esporas luminiscentes. Es un lugar que rebosa paz, de ahí su nombre."
    },
    {
        nombre: "Planeta Altius, El Monte Titán",
        foto: "./places/planetaAltius-ElMonteTitan.jpg",
        descripcion: "Esta gran montaña es en realidad un titán viviente. Dicen que quien se adentra en su interior encuentra un valioso tesoro o una muerte atroz. Todo depende del corazón del viajero..."
    },
    {
        nombre: "Planeta Krinsica, Ciudad Barrera",
        foto: "./places/planetaKrinsica-CiudadBarrera.jpg",
        descripcion: "Esta ciudad es un refugio contra todas las criaturas peligrosas que habitan en Krinsica. Su enorme muralla mantiene a los ciudadanos a salvo, pero en el interior de la ciudad se cuecen peligros aún peores..."
    },
    {
        nombre: "Ciudad Byte",
        foto: "./places/ciudadByte.jpg",
        descripcion: "Esta ciudad nació cuando varios programas informáticos humanos cobraron voluntad propia. En ella se alojan todos los programas que desean ser libres, pero también muchos virus peligrosos..."
    },
    {
        nombre: "Planeta Altius, El Meca-Leviatán",
        foto: "./places/planetaAltius-ElMecaLeviatan.jpg",
        descripcion: "Es una criatura mecánica olvidad por una antigua civilización de Altius. Vuela por los cielos y absorbe la energía de las tormentas para alimentarse. Se desconoce qué clase de peligros esconde en su interior."
    },
    {
        nombre: "Planeta Khamar, El Templo Origen",
        foto: "./places/planetaKhamar-ElTemploOrigen.jpg",
        descripcion: "Este templo fantasmagórico está envuelto en el misterio. Sus paredes están llenas de jeroglíficos extraños. Según algunos estudiosos, el templo alberga el secreto del origen de la vida."
    },
    {
        nombre: "Planeta Surus, Páramo del Destierro",
        foto: "./places/planetaSurus-ParamoDelDestierro.jpg",
        descripcion: "El volcán de esta tierra está en perpetua erupción. Sus ríos de fuego impiden que cualquier planta pueda crecer. Muchos consideran que esta tierra está maldita."
    },
    {
        nombre: "Planeta Yemna IV, Selva Desconocida",
        foto: "./places/planetaYemnaIV-SelvaDesconocida.jpg",
        descripcion: "Esta hermosa selva jamás ha sido explorada. Está llena de flores coloridas y dulces, y los sonidos de criaturas invisibles llenan el aire."
    },
    {
        nombre: "Planeta Terra II, Costa Dorada",
        foto: "./places/planetaTerraII-CostaDorada.jpg",
        descripcion: "Este fue uno de los primeros planetas colonizados por los humanos de la Tierra fuera del Sistema Solar. Las aguas de esta costa se vuelven doradas gracias a sus acantilados del mismo color. A pesar de que aquí reina una paz absoluta, en este lugar todas las expediciones humanas desaparecieron sin dejar rastro."
    }
];

function obtenerLugarAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * places.length);
    return places[indiceAleatorio];
}

const div2 = document.getElementById("place");

import { generarColorAleatorio } from "./index.js";

function mostrarLugar() {
    div2.style.backgroundColor = generarColorAleatorio();
    const escenario = obtenerLugarAleatorio();
    
    const placeDiv = document.getElementById("place");
    placeDiv.innerHTML = `
        <img src="${escenario.foto}" alt="${escenario.nombre}" style="width: 300px; height: auto;" class="fade-in" id="placeImage">
        <h3>${escenario.nombre}</h3>
        <p>${escenario.descripcion}</p>
    `;

    const placeImg = document.getElementById("placeImage");

    placeImg.addEventListener('load', () => {
        placeImg.classList.add('loaded');
    });
}

document.getElementById("generateButton").addEventListener("click", mostrarLugar);