


//Declaracióon de una función como variables

//let n_var = "valor variable"



let sumar = function(a,b) { return +a + +b };

//DEclaraciónbn de una función arrow

let restar =  (a,b) => {return a-b}

//Declaración de una función

function sumarDobles(a,b) {
    a *=2
    b *=2
    return  a + b;
}



function main(){
    let nNum1 =  0;
    let nNum2 =  0;

    nNum1 = Number(prompt(" Dime tu número",12));
    nNum2 = Number(prompt(" Dime tu número",23));

    let nResultSumarDobles = sumarDobles (nNum1, nNum2);
    let nResultSumar = sumar (nNum1, nNum2);
    let nResultResta = restar (nNum1, nNum2);
    
     console.log(sumarDobles (nResultSumaDobles));
     console.log(sumar (nResultSuma));
     console.log(restar (nResultReSta));
      
}

    
main ()