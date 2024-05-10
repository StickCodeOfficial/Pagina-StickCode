const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    cancelBtn.classList.add("show");
    body.classList.add("disabledScroll");
}

cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    body.classList.remove("disabledScroll");

}

window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

function toggleLists() {
    var espanolList = document.querySelector('.espanol');
    var inglesList = document.querySelector('.ingles');

    if (espanolList.style.display === 'none') {
        espanolList.style.display = 'block';
        inglesList.style.display = 'block';
    } else {
        espanolList.style.display = 'none';
        inglesList.style.display = 'none';
    }
}

document.onreadystatechange = function () {
if (document.readyState === "complete") {
    // Cuando la página ha terminado de cargar completamente
    document.getElementById("loader").style.display = "none"; // Ocultar el elemento de carga
}
};

// Función para ocultar el mensaje de carga después de un retraso
window.addEventListener('load', function() {
var loadingMessage = document.getElementById('loading-message');
setTimeout(function() {
loadingMessage.style.display = 'none';
  }, 1350); // 1700 milisegundos = 1.7 segundos
});

document.addEventListener('click', function(event) {
    var texto = document.getElementById('textoOculto');
    var mostrarTexto = document.getElementById('mostrarTexto');
    
    // Verificar si el clic ocurrió fuera del área del mensaje y del botón
    if (!texto.contains(event.target) && event.target !== mostrarTexto) {
        // Ocultar el texto si está mostrado
        if (texto.classList.contains('mostrado')) {
            texto.classList.remove('mostrado', 'visible');
            texto.classList.add('MasDeMiOculto'); // Agregar clase para ocultar el texto
        }
    }
});

document.getElementById('mostrarTexto').addEventListener('click', function(event) {
    event.stopPropagation(); // Evitar que el clic se propague al documento
    var texto = document.getElementById('textoOculto');
    texto.classList.toggle('MasDeMiOculto');
    texto.classList.toggle('mostrado');

    // Agregar clase 'visible' después de un breve retraso para iniciar la animación
    setTimeout(function() {
        texto.classList.toggle('visible');
    }, 50);
});

