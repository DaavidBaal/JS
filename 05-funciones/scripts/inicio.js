


//Declaracióon de una función
//function sumar () {}

function saludar () {
    let sSaludo = "Hola";
    console.log(sSaludo);
}
//Tener cuidado con la concatenacion

function sumar (a, b) {
    return Number (a) + Number(b);
}

function restar (a, b) {
    return (a) - (b);
}
function multiplicar (a, b) {
    return (a) * (b);
}
function dividir (a, b) {
    return (a) / (b);
}
//function sumarMal () {
 //       return + nNum1 + nNum2
//}

function main (){
    let nNum1 = prompt(" Dime tu número");
    let nNum2 = prompt(" Dime tu otro");

    console.log (sumar(nNum1, nNum2));
    console.log (restar(nNum1, nNum2));
    console.log (restar(nNum2, nNum1));
    console.log (multiplicar(nNum1, nNum2));
    console.log (dividir(nNum1, nNum2));
    
    saludar();
}

//Invocación,es decir, llamar a la función,decirle que se ejecute
// Sin los parentesis no hay invocación

main();

