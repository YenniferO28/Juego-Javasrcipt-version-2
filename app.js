let numeroSecreto = 0;
let intentos = 0;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroDeUsuario);
    //console.log (numeroDeUsuario === numeroSecreto);
    console.log(intentos)
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('P', `Asertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('P', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('P', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ' ';

}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Indica un numero del 1 al 100');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar el numero aleatorio
    //iniciaizar el numero de intentos
    condicionesIniciales();
    //deshabilita el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
