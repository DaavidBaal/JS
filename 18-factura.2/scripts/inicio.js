// Ejercicio 19.b


let oFactura1= {
    idFactura : "125",
    idCliente : "A34"
}
let oFactura2= {
    idFactura : "126",
    idCliente : "A47"
}

function Factura (idFactura, idCliente){
    this.empresa = {
    Nombre:"Teamworks" ,
    Dirección : "Calle la que Sea" ,
    Telefono : "xxxxxxxxx",
    NIF :"z- 65652331",

    }
    this.idFactura = idFactura;
    this.idCliente = idCliente;
}

let f34 = new Factura("125", "A34");
let f35 = new Factura("126", "A47");

console.log(f34);
console.log(f35);