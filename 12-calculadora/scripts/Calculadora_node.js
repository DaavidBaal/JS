const prompt = require("prompt");

(function main() {

    let sumar = (a, b) => {
        return Number(a) + Number(b);
    }
    let restar = (a, b) =>{
        return (a) - (b);
    }
    let multiplicar = (a, b) => {
        return (a) * (b);
    }
    let dividir = (a, b) => {
        return (a) / (b);
    }
    let calular = (pNum1,pNum2,pOp) => {
        let result = 0
    
    if (pOp == "S") {
        //suma
        result(pNum1,pNum2)
    } else if {pOp =="R"{
        //Resta
        result
    }else if 
    //Objeto que incluye los mensajes y las variables del prompt
    var oDatos = {
        properties: {
            num1: {
                description: 'Escribe un número'
            default: 24
            },
            num2: {
                description: 'Escribe un número'
            default: 12
            },
            op: {
                description:
                " Seleccionar Suma Resta Multiplicación División"
            }

        }