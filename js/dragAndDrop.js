
//Obtenemos los elementos del DOM que van a tener los eventos
const contenedorDestino = document.getElementById('contenedorDestino');
const contenedorRaton = document.getElementById('contenedorRaton');
const contenedoreyBoard = document.getElementById('contenedorKeyBoard');
const contenedorApi = document.getElementById('contenedorApi');
const contenedorDragDrop = document.getElementById('contenedorDragDrop');

contenedorRaton.draggable = true;
contenedoreyBoard.draggable = true;
contenedorApi.draggable = true;
contenedorDragDrop.draggable = true;


contenedorDestino.addEventListener('drop', (event)=>{
    event.preventDefault();

    let divContenedor = document.createElement('div');
    let img = document.createElement('img');
    img.src = event.dataTransfer.getData('text/plain');
    divContenedor.appendChild(img);
    contenedorDestino.appendChild(divContenedor);
})


contenedorDestino.addEventListener('dragover', (event)=>{
    event.preventDefault();
    event.target.style.opacity = '1';
})


contenedorDestino.addEventListener('click', (event)=>{console.log("click")})


// Eventos de opacidad cuando movemos el div
function handleDragStart(event) {
    this.style.opacity = '0.4';
    event.dataTransfer.setData('text/plain', event.target.id);
}

function handleDragEnd(e) {
    this.style.opacity = '1';
}


addEventListener('dragstart', (event)=>{
    event.dataTransfer.setData('text/plain', event.target.src);
});


let items = document.querySelectorAll('.box');

  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
  });
