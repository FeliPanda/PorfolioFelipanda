
const mainContent = document.getElementById("main_content");
const container = document.querySelector('.bubbles');
const mainText = document.createElement("div");


mainText.className = "name";
mainText.innerHTML = `
    <div class="content">
        <div class="content__container">
            <p class="content__container__text">
                Hola
            </p>
            
            <ul class="content__container__list">
                <li class="content__container__list__item">mundo !</li>
                <li class="content__container__list__item">usuarios !</li>
                <li class="content__container__list__item">reclutadores !</li>
                <li class="content__container__list__item">a todos !</li>
            </ul>
        </div>
        <div class="text"> 
            <h1> Felipe Vergara </h1>
            <h2> Desarrollador Frontend </h2>
            <div class= "buttons">
                <button id="CV">
                Descargar CV
                <img src="../IMG/download2.png" alt="">
                </button>
                <button id="linkedin">
                Contáctame
                <img src="../IMG/telegram2.png" alt="">
                </button>
            </div>
        </div>
        
    </div>
    `;
mainContent.appendChild(mainText); 
var downloadbttn= document.getElementById("CV");

downloadbttn.addEventListener('click',function(){
    var link = document.createElement('a');
    link.href = 'https://drive.google.com/drive/folders/1-LOzLTnh0D0x0JRKkhyEsIxBCADpvfGG?hl=es';
    link.download = 'CV_LFV.pdf';
    link.style.display = 'none';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})

var linkedin= document.getElementById("linkedin");

linkedin.addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/felipe-vergara-zorrilla-88606b231/', '_blank');
})

// profile picture

var profileContent = document.querySelector(".Profile_container");

profileContent.innerHTML=`

    <img class="img_profile" src="./IMG/fel3.jpg" alt="" srcset="">
    <div class="text_aboutme">
        <h2>
        Quién soy 
        </h2>

        <h1 class="aboutme">
        Sobre mí
        </h1>
        <p>
        Soy un biólogo colombiano que vino a Argentina con el objetivo de realizar una maestría en conservación de la biodiversidad en la UBA. Después de completar la maestría, me enamoré de Argentina y decidí quedarme. Mi primer acercamiento al mundo de la programación se dio durante mi tesis de pregrado, cuando comencé a trabajar con Sistemas de Información Cartográficos (SIG) y aprendí a usar R Studio para crear mapas de ecosistemas y manejar bases de datos. Luego empecé a estudiar programación Frontend y  descubrí mi pasión por la programación y el desarrollo de páginas web que ofrecen experiencias únicas a los usuarios. Puedes ver algunos de mis proyectos en la sección de proyectos.
        </p>
        <p>
        Como puedes notar, soy una persona que está constantemente en busca de conocimiento. Me encanta aprender cosas nuevas y, en gran parte de mi vida, he sido autodidacta, aprendiendo nuevas tecnologías y herramientas para mejorar mis habilidades y desarrollarme más como profesional.
        </p>
        <p>
            si quieren saber más de mi, no duden en <B>contactarse </B>conmigo.
        </p>
    </div>´
        
`
// profileContent.appendChild()


// using particles!!!

fetch('./JS/particlesjs-config.json')
    .then(function(response) {
    return response.json();
})
.then(function(config) {
    // Utilizar la configuración para configurar particles.js
    particlesJS('particles-js', config);
})
.catch(function(error) {
    console.error('Error al cargar la configuración de particles.js', error);
});

// changing lang

var check = document.querySelector(".check");
var langSelected = false; // Variable para llevar el registro del estado del idioma
var originalScript = document.createElement('script'); // Crear un elemento script para el JS original
originalScript.src = "/JS/main.js"; // Establecer la ruta del JS original
var alternateScript = document.createElement('script'); // Crear un elemento script para el JS alternativo
alternateScript.src = "/JS/en-main.js"; // Establecer la ruta del JS alternativo

check.addEventListener('click', lang);

function lang() {
    if (langSelected) {
    // Cambiar al archivo HTML y JS original
        location.href = "./index.html";
        document.head.appendChild(originalScript); // Agregar el JS original al head del nuevo HTML
    } else {
    // Cambiar al archivo HTML y JS alternativo
        location.href = "./en-index.html";
        document.head.appendChild(alternateScript); // Agregar el JS alternativo al head del nuevo HTML
    }
}

// Actualizar el estado del checkbox al cargar la página
window.addEventListener('load', function() {
  // Obtener el idioma actual de la página cargada
var currentUrl = window.location.href;
    if (currentUrl.includes("en-index.html")) {
    langSelected = true;
    check.checked = true;
    document.head.appendChild(alternateScript); // Agregar el JS alternativo al head de la página cargada
    } else {
    langSelected = false;
    check.checked = false;
    document.head.appendChild(originalScript); // Agregar el JS original al head de la página cargada
    }
});
