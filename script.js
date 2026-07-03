// =====================
// ❤️ CORAZONES FLOTANDO
// =====================

const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 35) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 300);


// =====================
// 🌸 ELEMENTOS PRINCIPALES
// =====================

const startBtn = document.getElementById("startBtn");
const story = document.getElementById("story");

const texto = document.getElementById("typewriter");
const nextBtn = document.getElementById("nextBtn");

const video = document.getElementById("videoRecuerdo");
const videoSection = document.getElementById("videoSection");
const videoText = document.getElementById("videoText");
const continueVideo = document.getElementById("continueVideo");


// =====================
// 🌹 FRASES (HISTORIA)
// =====================

const frases = [

"Hay personas que llegan sin avisar...",

"Y poco a poco cambian completamente nuestros días.",

"Contigo descubrí que una conversación puede alegrar toda una tarde.",

"Que una sonrisa puede quedarse en mi cabeza durante horas.",

"Y que existen personas capaces de hacer sentir paz con solo estar presentes.",

"Sin darme cuenta...",

"Empecé a esperar con emoción cada mensaje tuyo.",

"Y hoy quiero contarte por qué eres tan importante para mí."

];

let fraseActual = 0;
let letra = 0;


// =====================
// ✍️ EFECTO ESCRITURA
// =====================

function escribir() {

    if (fraseActual >= frases.length) {
        nextBtn.style.display = "inline-block";
        return;
    }

    texto.innerHTML = "";
    letra = 0;

    escribirLetra();
}

function escribirLetra() {

    if (letra < frases[fraseActual].length) {

        texto.innerHTML += frases[fraseActual].charAt(letra);
        letra++;

        setTimeout(escribirLetra, 45);

    } else {

        setTimeout(() => {
            fraseActual++;
            escribir();
        }, 1800);
    }
}


// =====================
// 🚀 INICIO (BOTÓN COMENZAR)
// =====================

startBtn.onclick = () => {

    const welcome = document.getElementById("welcome");

    welcome.style.opacity = "0";
    welcome.style.transition = "1s";
const music = document.getElementById("bgMusic");

music.volume = 0.5; // volumen suave

music.play().catch(() => {
    console.log("El navegador bloqueó autoplay, se activará con interacción");
});
    setTimeout(() => {

        welcome.style.display = "none";

        story.style.display = "flex";

        escribir();

    }, 1000);
};


// =====================
// ➡️ CONTINUAR A VIDEO
// =====================

nextBtn.onclick = () => {

    document.querySelector(".story-container").style.display = "none";

    videoSection.style.display = "flex";

    video.currentTime = 0;
    video.play();
};


// =====================
// 🎥 CUANDO TERMINA EL VIDEO
// =====================

video.addEventListener("ended", () => {

    videoText.style.opacity = "1";
    continueVideo.style.display = "inline-block";

});


// =====================
// 💌 BOTÓN FINAL DEL VIDEO
// =====================

continueVideo.onclick = () => {

    videoSection.style.display = "none";

    envelopeSection.style.display = "flex";

};
const envelopeSection = document.getElementById("envelopeSection");
const envelope = document.getElementById("envelope");
const openText = document.getElementById("openText");

const letterSection = document.getElementById("letterSection");
const letterText = document.getElementById("letterText");
const finalBtn = document.getElementById("finalBtn");

const carta = [

"Desde que llegaste a mi vida créeme que fue una de las cosas más lindas que me ha pasado, pues sinceramente nunca he conocido a una niña tan linda como tú, eres aquella persona por la cual pienso en mejorar de verdad que me sentía mal sin ti en ese tiempo que me alejé de ti y pues la regué corazón",

"pero sabes te agradezco por haberme dado la oportunidad de poderte enamorar y pues hoy te doy este detalle que sinceramente viene desde mi corazón no sé como te parezca esto pero la verdad espero te guste mucho",

"sé que no hemos salido mucho por las cosas de tus exámenes y luego tus cursos pero quiero que sepas que aunque no salgamos te quiero mucho y yo esperaría una eternidad por ti porque de no ser por ti no estaría así de feliz",

"amo que seas la niña de mi vida y amo como van las cosas contigo, sabes eres el amor de mi vida puede sonar cursi pero es que amo cada cosita de ti, eres mi niña perfecta",

"por eso te entrego esta propuesta de amor pues ya quiero formalizar contigo no lo tomes a mal sé que demoré bastante en pedirlo pues ya llevamos como 6 meses hablando conociéndonos pues 8",

"pero pues ves que la regué y a decir verdad pasé por unos problemas algo graves financieros y pues se retrasaron mis planes se que para el amor pues x el money pero eres tan especial para mi que queria que tuvieras uno de los mejores dias de tu vida y que lo recuerdes siempre y pues que veas que eres la niña de mis sueños",

"pero siempre te lo quise pedir un 11 porque ese es un día especial ya que si juntamos nuestras fechas de cumpleaños da como número 11 y quiero que sea nuestro día de noviazgo también",

"a la vez tengo miedo porque llevamos pocas veces que nos hemos visto pues solo van 2 en el cumple de Barush y pues en nuestra salida y no sé si me dirás que sí con tan pocas salidas",

"pero si me das el sí te puedo asegurar una cosa y es que nunca te dejaré",

"te amo y nunca te he dicho esa palabra tan significativa porque me da miedo el no ser correspondido pero pues hay que quitar esos sentimientos malos porque sé que contigo puedo contar con lo que sea",

"y pues prefiero expresar mi sentir hacia ti",

"te amo y amo que mi familia sepa de ti un día de estos te los presentaré a mi mamá y a mi papá",

"ellos son a su manera importantes para mí pero cuando te lleve a conocer a mi abuelo uff ahí sí me emocionaré",

"él te va a caer bien es muy chido ya quiero presentarte a todos de una manera oficial",

"te amo corazón y siempre lo haré gracias por la confianza que me has tenido",

"amo las cosas que me dices y amo que me mandes fotos de tu viaje tan lindo que tuviste y de tus trabajos tan wow",

"o sea ya ni yo hago cosas tan increíbles como tú",

"sabes amo ese día que te conocí porque por primera vez en mi vida sé lo que es amar a alguien",

"y me gusta que esa persona a la que amo seas tú",

"me pongo tan sentimental cuando pienso en ti que quisiera expresar todo mi sentir hacia ti",

"y sé que si lo hago tendrías que tener paciencia porque se haría un libro grande jaksjajs",

"te amo mi linda Katy",

"te mando muchísimos abrazos y quiero que veas lo que sigue después de esta carta",

"tal vez sea algo tramposo jajajaja pero es que no quiero aceptar un no",

"te adoro mi preciosa",

"te tengo una sorpresa para cuando tengas este detalle",

"te compré un Walle bueno una Eva jajajaja",

"ya los tendrás cuando nos veamos",

"ojalá te guste porque una vez me dijiste que no te gustan mucho las pelis románticas y esa es romántica creo yo",

"pero ay no sé ojalá sí te guste",

"te amo te amo te amo y te amo",

"te diría un millón de veces te amo con tal de que te quede claro"

];

let i = 0;
let j = 0;
function escribirCarta(){

    if(i >= carta.length){
        finalBtn.style.display = "inline-block";
        return;
    }

    letterText.innerHTML = "";
    j = 0;

    escribirLetraCarta();
}

function escribirLetraCarta(){

    if(j < carta[i].length){

        letterText.innerHTML += carta[i].charAt(j);
        j++;

        setTimeout(escribirLetraCarta, 40);

    } else {

        setTimeout(() => {
            i++;
            escribirCarta();
        }, 1500);

    }
}
envelope.onclick = () => {

    envelopeSection.style.display = "none";
    letterSection.style.display = "flex";

    escribirCarta();

};
// =====================
// 💖 ELEMENTOS FINALES
// =====================

const finalSection = document.getElementById("finalSection");
const endMessage = document.getElementById("endMessage");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");


// =====================
// 🚀 MOSTRAR FINAL DESDE CARTA
// =====================

// 👇 cuando terminas la carta (FINAL del flujo)
finalBtn.onclick = () => {

    letterSection.style.display = "none";
    finalSection.style.display = "flex";

};


// =====================
// 😅 BOTÓN NO (SE MUEVE)
// =====================

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

noBtn.addEventListener("pointerenter", moverNo);
noBtn.addEventListener("mouseover", moverNo);
noBtn.addEventListener("touchstart", moverNo);

});


// =====================
// 💖 BOTÓN SÍ (FINAL EMOTIVO)
// =====================

yesBtn.onclick = () => {

    finalSection.style.display = "none";
    endMessage.style.display = "flex";

    // ❤️ explosión de corazones
    for (let i = 0; i < 80; i++) {
        createHeart();
    }

    // 🌹 mensaje final también puede durar
    setTimeout(() => {

        endMessage.innerHTML = `
        <h1>❤️ Gracias por hacerme el más feliz no te fallare ❤️</h1>
        
        `;

    }, 1500);

};
document.body.addEventListener("click", () => {
    music.play();
}, { once: true });
function moverNo(){

    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 120);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
});