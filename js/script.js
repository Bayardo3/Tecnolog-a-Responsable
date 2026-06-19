// ===============================
// QUIZ INTERACTIVO
// ===============================

const preguntas = [

    {
        pregunta: "¿Qué es la obsolescencia programada?",
        correcta: "Reducir la vida útil de un producto",
        opciones: [
            "Reducir la vida útil de un producto",
            "Reciclar dispositivos",
            "Reparar computadoras",
            "Ahorrar energía"
        ]
    },

    {
        pregunta: "¿Qué es la basura electrónica?",
        correcta: "Residuos de dispositivos tecnológicos",
        opciones: [
            "Basura doméstica",
            "Residuos de dispositivos tecnológicos",
            "Papel reciclado",
            "Plástico reutilizable"
        ]
    },

    {
        pregunta: "¿Cuál de estos es un residuo electrónico?",
        correcta: "Teléfono móvil dañado",
        opciones: [
            "Botella de vidrio",
            "Teléfono móvil dañado",
            "Cartón",
            "Lata de aluminio"
        ]
    },

    {
        pregunta: "¿Qué institución ambiental existe en Nicaragua?",
        correcta: "MARENA",
        opciones: [
            "NASA",
            "OMS",
            "MARENA",
            "UNESCO"
        ]
    },

    {
        pregunta: "¿Qué debe hacerse antes de reciclar un celular?",
        correcta: "Eliminar datos personales",
        opciones: [
            "Romperlo",
            "Eliminar datos personales",
            "Quemarlo",
            "Pintarlo"
        ]
    },

    {
        pregunta: "¿Cuál es una consecuencia de la basura electrónica?",
        correcta: "Contaminación ambiental",
        opciones: [
            "Mejor calidad del aire",
            "Contaminación ambiental",
            "Aumento de bosques",
            "Purificación del agua"
        ]
    },

    {
        pregunta: "¿Qué porcentaje aproximado se recicla formalmente?",
        correcta: "22%",
        opciones: [
            "90%",
            "75%",
            "22%",
            "50%"
        ]
    },

    {
        pregunta: "¿Qué práctica ayuda a reducir residuos electrónicos?",
        correcta: "Reutilizar equipos",
        opciones: [
            "Comprar más dispositivos",
            "Reutilizar equipos",
            "Cambiar teléfono cada mes",
            "Descartar baterías en la basura"
        ]
    },

    {
        pregunta: "¿Qué contienen algunos residuos electrónicos?",
        correcta: "Materiales tóxicos",
        opciones: [
            "Solo plástico",
            "Materiales tóxicos",
            "Solo papel",
            "Solo vidrio"
        ]
    },

    {
        pregunta: "¿Cuál es el objetivo de la tecnología responsable?",
        correcta: "Reducir el impacto ambiental",
        opciones: [
            "Vender más dispositivos",
            "Reducir el impacto ambiental",
            "Generar más residuos",
            "Eliminar el reciclaje"
        ]
    }

];

let indice = 0;
let puntaje = 0;

// Crear barra de progreso automáticamente

window.onload = function () {

    const quiz = document.getElementById("quiz");

    const barra = document.createElement("div");

    barra.innerHTML = `
<div style="
width:100%;
background:#ddd;
border-radius:10px;
margin:15px 0;">
<div id="progreso"
style="
height:20px;
width:0%;
background:#2e7d32;
border-radius:10px;">
</div>
</div>
`;

    quiz.prepend(barra);

    cargarPregunta();

    animarTarjetas();

};

// ===============================
// CARGAR PREGUNTA
// ===============================

function cargarPregunta() {

    if (indice >= preguntas.length) {

        mostrarResultado();

        return;

    }

    document.getElementById("pregunta").innerHTML =
        preguntas[indice].pregunta;

    let html = "";

    preguntas[indice].opciones.forEach(op => {

        html += `
<button onclick="responder('${op}')">
${op}
</button><br><br>
`;

    });

    document.getElementById("respuestas").innerHTML = html;

    actualizarBarra();

}

// ===============================
// RESPONDER
// ===============================

function responder(opcion) {

    if (opcion === preguntas[indice].correcta) {

        puntaje++;

        alert("✅ Correcto");

    }
    else {

        alert("❌ Incorrecto");

    }

    indice++;

    cargarPregunta();

}

// ===============================
// BARRA DE PROGRESO
// ===============================

function actualizarBarra() {

    let porcentaje =
        (indice / preguntas.length) * 100;

    const barra =
        document.getElementById("progreso");

    if (barra) {

        barra.style.width =
            porcentaje + "%";

    }

}

// ===============================
// RESULTADO FINAL
// ===============================

function mostrarResultado() {

    document.getElementById("pregunta").innerHTML =
        "Quiz Finalizado";

    document.getElementById("respuestas").innerHTML =
        "";

    let porcentaje =
        Math.round((puntaje / preguntas.length) * 100);

    let mensaje = "";

    if (porcentaje >= 90) {

        mensaje =
            "🏆 Excelente conocimiento sobre tecnología responsable.";

    }
    else if (porcentaje >= 70) {

        mensaje =
            "👏 Muy buen trabajo.";

    }
    else if (porcentaje >= 50) {

        mensaje =
            "🙂 Buen intento. Puedes aprender más.";

    }
    else {

        mensaje =
            "📚 Te recomendamos revisar nuevamente el contenido.";

    }

    document.getElementById("resultado").innerHTML =

        `
<h3>Puntaje: ${puntaje}/${preguntas.length}</h3>
<h2>${porcentaje}%</h2>
<p>${mensaje}</p>
`;

}

// ===============================
// CONTADORES ANIMADOS
// ===============================

function animarTarjetas() {

    const numeros =
        document.querySelectorAll(".tarjeta h3");

    numeros.forEach(numero => {

        const texto =
            numero.innerText;

        const valor =
            parseInt(texto);

        if (!isNaN(valor)) {

            let actual = 0;

            const intervalo = setInterval(() => {

                actual++;

                numero.innerText =
                    actual;

                if (actual >= valor) {

                    numero.innerText =
                        texto;

                    clearInterval(intervalo);

                }

            }, 20);

        }

    });

}

// ===============================
// BOTÓN VOLVER ARRIBA
// ===============================

const boton =
    document.createElement("button");

boton.innerHTML = "⬆";

boton.style.position = "fixed";
boton.style.bottom = "20px";
boton.style.right = "20px";
boton.style.padding = "15px";
boton.style.border = "none";
boton.style.borderRadius = "50%";
boton.style.background = "#1565c0";
boton.style.color = "white";
boton.style.cursor = "pointer";
boton.style.display = "none";

document.body.appendChild(boton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        boton.style.display = "block";

    }
    else {

        boton.style.display = "none";

    }

});

boton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});