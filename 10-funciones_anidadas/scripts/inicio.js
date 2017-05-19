

function main(){
    let nNum1 = 0;
    let nNum2 = 0;

    let sumar = (a,b) =>{ return +a + +b };
    let restar =  (a,b) => {return a-b};
    let sumarDobles = (a,b) => {
    a *=2
    b *=2
    return  a + b;
}






f
}



function main(){
    let nNum1 =  0;
    let nNum2 =  0;

    nNum1 = Number(prompt(" Dime tu número",12));
    nNum2 = Number(prompt(" Dime tu número",23));

    let nResultSumaDobles = sumarDobles (nNum1, nNum2);
    let nResultSumar = sumar (nNum1, nNum2);
    let nResultResta = restar (nNum1, nNum2);
    
     console.log(nResultSuma);
     console.log(nResultReSta);
     console.log(nResultSumaDobles);
      
}

//Invocación de la funcion

main ()