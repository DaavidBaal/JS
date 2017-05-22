// JavaScript & EcmaScript ES6

/**
 * Constantes
 */

const SALUDO ="Hello ";

/**
 * Variables y tipos de datos
 */


var nEdad = 12;
var sCantaor1 = "Pepe 'El Lebrijano'"
var sCantaor2 = 'Juan "El Habichuela"'

oCantaor1 = new String(sCantaor1)

console.log(sCantaor1)



console.log(sCantaor1.concat(sCantaor2))

let dosCantaores = sCantaor1.concat(sCantaor2)

console.log(dosCantaores)

let aPalabras = dosCantaores.split(" ")

let newCadena = aPalabras.join(" ")

console.log(String.fromCharCode(65));
console.log(aPalabras)
console.log(newCadena)