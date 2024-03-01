let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log (numeroSecreto);
    console.log(numeroDeUsuario);
    console.log (numeroDeUsuario === numeroSecreto);

    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p', 'Indica un numero del 1 al 100');

