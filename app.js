let numeroSecreto = generarNumeroSecreto();


function asignarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
function intentoDeUsuario(){

    alert('Click desde el boton');
    return;
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p', 'Indica un numero del 1 al 100');

