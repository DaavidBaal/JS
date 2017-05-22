calculadora ={
	 oDatox : {
		 num1 :{
			 valor : 25,		 
			 msg : "Escribe tu número"
		},
		num2 :{
			valor : 25,		 
			msg : "Escribe tu número"
		}
	 },

    sOperacion : {
		valor : "S",
		msg : "Seleciona <S>uma, <R>esta, <P>roducto o <D>ivision",
	},	
	sRespuesta : "",
	sum
}
(function main () {

	let sumar =  (a, b) => {
    	return Number(a) + Number(b);
	}

	let restar = (a, b) => {
    return a - b;
	}

	let multiplicar = (a, b) => {
		return a * b;
	}

	let dividir = (a, b) => {
		return a / b;
	}
	
	let calcular = (pNum1, pNum2, pOp) => {
		let result = 0;
		switch (pOp) {
			case "S":
			case "s":
				// Suma
				result = sumar(pNum1, pNum2)
				break;
			case "R":
				// Resta
				result = restar(pNum1, pNum2)
				break;
			case "*":
			case "P":
			case "p":
			case "M":
			case "m":			
				// Multiplicacion
				result = multiplicar(pNum1, pNum2)
				break;
			case "D":
				// División
				result = dividir(pNum1, pNum2)
				break;		
			default:
				// Instrucción no soportada
				result = NaN
				break;
		}
		return result;
    } // Fin de la función calcular

	let mostrarDatos = (pRespuesta) => {
		if (isNaN(pRespuesta)){
			console.log("Operación no soportada");	
		} else {
			console.log(`El resultado es ${pRespuesta}`);	
		}
	}

   

   calculadora.oDatox.num1.valor = prompt(calculadora.oDatox.num1,msg,
   											calculadora.oDatox.num1.valor)
	calculadora.oDatox.num2.valor = prompt(calculadora.oDatox.num2,msg,
   											calculadora.oDatox.num2.valor)
	calculadora.oDatox.num2.valor = prompt(calculadora.oDatox.num2,msg,
   											calculadora.oDatox.num2.valor)

	calculadora.oDatox.num2.valor = prompt("Escribe otro número", 25)
    calculadora.oDatox.op.valor = prompt("Selecciona <S>uma, <R>esta, <P>roducto o <D>ivision","S")

    let sRespuesta = calcular (oDatox.num1, oDatox.num2, oDatox.op);
	mostrarDatos(sRespuesta);

})();
