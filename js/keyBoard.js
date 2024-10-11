// Obtener el tamaño de la ventana del navegador
function obtenerTamanoVentana() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    return { ancho, alto };
}

// Posicionar el div con id 'cuadrado' en la mitad de la ventana
function posicionarCuadrado() {
    const { ancho, alto } = obtenerTamanoVentana();
    const cuadrado = document.getElementById('rectangulo');
    
    if (cuadrado) {
        const cuadradoAncho = cuadrado.offsetWidth;
        const cuadradoAlto = cuadrado.offsetHeight;
        
        const posicionX = (ancho - cuadradoAncho) / 2;
        const posicionY = (alto - cuadradoAlto) / 2;
        
        cuadrado.style.position = 'absolute';
        cuadrado.style.left = `${posicionX}px`;
        cuadrado.style.top = `${posicionY}px`;
    }
}

// Ejecutar la función al cargar la página y al redimensionar la ventana
window.onload = posicionarCuadrado;
window.onresize = posicionarCuadrado;

document.addEventListener("keydown", (ev) => {
    const cuadrado = document.getElementById('rectangulo');
    const movimiento = 10;
    const tecla = ev.key;
    switch (tecla) {
        case 'ArrowUp':
            cuadrado.style.top = `${parseInt(cuadrado.style.top) - movimiento}px`;
            break;
        case 'ArrowDown':
            cuadrado.style.top = `${parseInt(cuadrado.style.top) + movimiento}px`;
            break;
        case 'ArrowLeft':
            cuadrado.style.left = `${parseInt(cuadrado.style.left) - movimiento}px`;
            break;
        case 'ArrowRight':
            cuadrado.style.left = `${parseInt(cuadrado.style.left) + movimiento}px`;
            break;
        default:
            break; 
    }
  });

