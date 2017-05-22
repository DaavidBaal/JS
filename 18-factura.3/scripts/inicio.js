// Clases tal como aparecen en ES6


class cliente {
    constructor (nombre, dirección, telefono, nif){
        this.nombre = nombre,
        this.dirección = dirección
        this.telefono = telefono,
        this.nif = nif,


    }
}


let oFactura1 = {
    idFactura: "125",
    idCliente: "A34"
}
let oFactura2 = {
    idFactura: "126",
    idCliente: "A47"
}

function Factura(idFactura, idCliente) {
    this.empresa = {
        Nombre: "Teamworks",
        Dirección: "Calle la que Sea",
        Telefono: "xxxxxxxxx",
        NIF: "z- 65652331",

    }
    this.idFactura = idFactura;
    this.idCliente = idCliente;

}




Factura.prototype.muestraID = function () {
    alert("ID: " + this.idFactura)
}
Factura.prototype.muestraCliente = function () {
    alert("ID Cliente: " + this.idCliente)
}

let f34 = new Factura("125", "A34");
let f35 = new Factura("126", "A47");

f34.muestraID();
f35.muestraCliente();

console.log(f34);
console.log(f35);

//*

function ClienteOld (Nombre, Dirección, Telefono, NIF) {
    this.Nombre = nombre,
        this.Dirección = Dirección
    this.Telefono = Telefono,
        this.NIF = NIF,


function Factura2() {
    this.Cliente = new Cliente 
     
            "Teamworks",
            " Calle la que Sea",
            "xxxxxxxxx",
            "z- 65652331"

    }
}

Factura2.prototype.empresa =
    {
        Nombre: "Teamworks",
        Dirección: "Calle la que Sea",
        Telefono: "xxxxxxxxx",
        NIF: "z- 65652331",
    },
    

        elementos: [
     { description: "Guantes 1", cantidad: 12, precio: 15, }
      {description: "Guantes 2", cantidad: 13, precio: 16, }
      {description: "Guantes 3", cantidad: 15, precio: 18, }

],
    informacion:{
    baseImponible: 0,
        iva :1.21,
            total: 0,
                formaPago: "contado"
},
};
