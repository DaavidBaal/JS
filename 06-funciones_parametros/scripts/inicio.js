


//Declaracióon de una función
//function sumar () {}

function saludar () {
    let sSaludo = "Hola";
    console.log(sSaludo);
}
//Tener cuidado con la concatenacion

function sumar (a=0, b=0, c=0 ,d=0) {
    return  a+b+c+d;
}

function sumarArg(){
    let nResult = 0;
    for (var i = 0; i < arguments.length; i++) {
        nResult += arguments[i];
        
    }
   return nResult;
    

}

//function sumarMal () {
 //       return + nNum1 + nNum2
//}

function main (){
    let nNum1 = Number(prompt(" Dime tu número",12));
    let nNum2 = Number(prompt(" Dime tu otro",23));
    let nNum3 = +prompt(" Dime tu número",3);
    let nNum4 = +prompt(" Dime tu otro",13);

    console.log(sumarArg (nNum1, nNum2));
    console.log(sumarArg (nNum1, nNum2, nNum3));
    console.log(sumarArg (nNum1, nNum2, nNum3, nNum4,12,12));

    saludar();
}

//Invocación,es decir, llamar a la función,decirle que se ejecute
// Sin los parentesis no hay invocación

main();

