let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
console.log (numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroDeUsuario);
    //console.log (numeroDeUsuario === numeroSecreto);
    console.log(intentos)
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('P',`Asertaste el numero en ${intentos} ${(intentos == 1)? 'vez' : 'veces'}`);
    } else{
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
           asignarTextoElemento ('P','El numero secreto es menor');
        }else{
            asignarTextoElemento ('P','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja (){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value='';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p', 'Indica un numero del 1 al 100');

