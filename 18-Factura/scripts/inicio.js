// Ejercicio 19.b


let factura = {
  empresa: {
    Nombreempresa :"Teamworks" ,
    Dirección : "Calle la que Sea" ,
    Telefono : "xxxxxxxxx",
    NIF :"z- 65652331",
  },
  cliente : {
    Nombre:"Roi" ,
    Dirección : "Callejon Diagon" ,
    Telefono : "xxxxxxxxx",
    NIF :"z- 65652331",
  },
  elementos: [
      {description: "Guantes 1", cantidad:12,  precio:15,}
      {description: "Guantes 2", cantidad:13,  precio:16,}
      {description: "Guantes 3", cantidad:15,  precio:18,}

  ],
  informacion:{
      baseImponible: 0,
      iva :1.21,
      total: 0,
      formaPago: "contado"},
};

//calulaTotal = function () {}

//Método de cálculo del total y de visualización del total

factura.calculaTotal = function() {
    for (let i =0; i < this.elementos.lenglet i++) {
        this.informacion.baseImponible +=
        this.elementos[i].cantidad * this.informacion[i].precio;
    }
    this.informacion.total=
        this.informacion.baseImponible* this.informacion.iva;
},

factura.muestraTotal = function () {
    this.calculaTotal ();
    alert ("TOTAL = " + this.informacion.total + "euros");
};

factura.muestraDatos = function (){}