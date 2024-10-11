const boton = document.getElementById('formMouseFieldsButton');

boton.addEventListener('click', () => {
    event.preventDefault(); // Evitar el envío del formulario
    const filas = document.getElementById('filas');
    const columnas = document.getElementById('columnas');
    let isNumero = /^(?:[1-9][0-9]?|100)$/;
    let errors = {}

    if (!isNumero.test(filas.value)) {
        errors['filas'] = 'El campo filas debe ser un número entre 1 y 100';
    }
    if (!isNumero.test(columnas.value) || columnas.value > 70) {
        errors['columnas'] = 'El campo columnas debe ser un número entre 1 y 70';
    }
    if (filas.value.length === 0) {
        errors['filas'] = 'El campo filas es obligatorio';
    }
    if (columnas.value.length === 0) {
        errors['columnas'] = 'El campo columnas es obligatorio';
    }
    
    if (document.getElementById('divErrors')) {
        document.getElementById('divErrors').remove();
    }

    if (Object.keys(errors).length === 0) {
        //Creamos el tablero
        let tablero = document.getElementById('tablero');
        for(let i=0; i<filas.value; i++){
            let fila = document.createElement('div');
            fila.setAttribute('class', 'fila');
            for(let j=0; j<columnas.value; j++){
                let celda = document.createElement('div');
                celda.setAttribute('class', 'celda');
                celda.addEventListener('mouseover', () => {
                    let red = Math.floor(Math.random() * 256);
                    let green = Math.floor(Math.random() * 256);
                    let blue = Math.floor(Math.random() * 256);
                    celda.style.backgroundColor = `rgb(${red},${green},${blue})`;
                    setTimeout(() => {
                        celda.style.backgroundColor = "#333";
                    }, 500);
                });
                fila.appendChild(celda);
            }
            tablero.appendChild(fila);
        }
    } else {
        //Informamos del error
        let  div = document.createElement('div');
        div.setAttribute('id', 'divErrors');
        let  h3 = document.createElement('h3');
        h3.style.color = 'red';
        h3.textContent = '* Errores *';
        div.appendChild(h3);
        for (let key in errors) {
            let p = document.createElement('p');
            p.textContent = errors[key];
            div.appendChild(p);
        }
        document.forms[0].appendChild(div);
    }
})


