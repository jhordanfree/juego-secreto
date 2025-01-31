
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 100;

function asignarTextoElemento(elementoHTML,texto){
    let elemento = document.querySelector(elementoHTML);
    elemento.innerHTML = texto;
    return;
}

function verificarIntentoUsuario(){
    //let intento = documento.querySelector('input').value; el value es para que devuelva el valor no el objeto
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroUsuario);
    if(numeroUsuario === numeroSecreto){  //el triple igual dice tiene que ser igual en vlaor y en tipo
        asignarTextoElemento('p', `Ganaste !!!!!!!! en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`); //el ? es un if y el : es un else
    } else {
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
    } else{
        asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
 }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroAleatorio(){
  // return Math.floor(Math.random() * 100) + 1;  //mat floor devuelve la parte decimal y 
    // el +1 es para que no devuelva el 0 y math random devuelve un numero aleatorio entre 0 y 1
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length !== numeroMaximo){
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        } 
    }
    else{
        asignarTextoElemento('p', 'Se agotaron los números posibles');

    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego número secreto !!!!!!!!' );
    asignarTextoElemento('p', `Introduce un número del 1 al ${numeroMaximo} !!!`);
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1;
    console.log(numeroSecreto);
}


function reiniciarJuego(){
    limpiarCaja();
    asignarTextoElemento("p",`Se cambio el numero secreto, Introduce un número del 1 al ${numeroMaximo}!!!!`);
    
    //Esperar 1 segundos antes de mostrar los mensajes iniciales
    setTimeout(() => {
        condicionesIniciales();
    }, 1000); 
}

function abrirAyuda() {
    window.open("ayuda.html", "_blank");
}



condicionesIniciales();
