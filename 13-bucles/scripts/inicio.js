let sammple =() => {
    let aDatos = [12,13,54,65,34]
    let msg = ""
    let nResult = 0;
    for (let i=0; i < aDatos.length; i=0++) {
                msg += "aDatos[i] +"
                nResult += aDatos[i];
        
    }
}

let factorial = (pNumber) => {
    let nResult = 1
    for (let i = pNumber; i> 1; i--) {
        nResult *=i;
        
    }
    return nResult;
}

let nNumber = prompt("Dime un número menor que 170");
console.log(factorial(nNumber))