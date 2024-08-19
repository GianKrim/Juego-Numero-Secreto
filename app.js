
let numeroAleatorio = 100;
let numeroSecreto = 0;
let intentos = 0;
let listaNnumerosSorteados = [];

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento ("p", `Acertaste el Número en ${intentos} ${intentos === 1 ? "Intento" : "Intentos"}`);
   document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento ("p", "El Número Secreto es Menor");
        } else {
            asignarTextoElemento ("p", "El Número secreto es Mayor");
        }
        intentos++;
        limpiarCaja ();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroAleatorio)+1;

    console.log(numeroGenerado);
    console.log(listaNnumerosSorteados);

    if(listaNnumerosSorteados.length == numeroAleatorio) {
asignarTextoElemento("p", "Ya se Sortearon Todos los Números Posibles");
    } else {

   

    if (listaNnumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNnumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
     }
    }
}

function condicionesIniciales (){
   asignarTextoElemento("h1","JUEGO DEL NÚMERO SECRETO");
   asignarTextoElemento("p",`INGRESA UN NÚMERO DEL 1 AL ${numeroAleatorio}`);
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
   console.log (numeroSecreto);
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    
}

condicionesIniciales();





/*
let numeroAleatorio = 100;
let numeroSecreto = Math.floor(Math.random()*numeroAleatorio)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 8
console.log(numeroSecreto);
//let palabraVeces = "Vez";
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me Indicas un Número Entre 1 y ${numeroAleatorio}, Por Favor:`));
    
    //console.log(numeroUsuario);
    if(numeroUsuario == numeroSecreto) {
    alert (`Acertaste, El Número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "Vez" : "Veces"}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert ("El Número Secreto es Menor");
        } else {
            alert ("El Número Secreto es Mayor");
        }
        intentos++;
        //palabraVeces = "Veces";
        if (intentos > maximosIntentos) {
            alert (`Llegaste al Número Maximo de ${maximosIntentos} Intentos`);
            break;
        }
    //   alert("Lo Siento, No Acertaste El Número");
    }
}
*/
