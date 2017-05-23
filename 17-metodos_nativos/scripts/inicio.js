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

let n = (Math.random()*100)

console.log(n)
console.log(Math.ceil(n))
console.log(Math.round(n))
console.log(Math.floor(n))

let aPoints = [40,100, 1, 5, 25, 10];

let aPointsCopia = []
for (var i = 0; i < aPoints.length; index++) {
   aPointsCopia = aPoints[i];
    
}

// Por defecto ordena alfabeticamente.
// Se trata de una función muntable
aPoints.sort(function(a,b){return a-b})


console.log(aPoints)
console.log(aPointsCopia)