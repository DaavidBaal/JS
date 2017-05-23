function palindromo(cadena) {
 
  var resultado = "La cadena \""+cadena+"\" \n";
 
  // Pasar a minusculas la cadena
  var cadenaOriginal = cadena.toLowerCase();
 
  // Convertir la cadena en un array
  var letrasEspacios = cadenaOriginal.split("");
 
  // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
  var cadenaSinEspacios = "";
  for(i in letrasEspacios) {
    if(letrasEspacios[i] != " ") {
      cadenaSinEspacios += letrasEspacios[i];
    }
  }
 
  var letras = cadenaSinEspacios.split("");
  var letrasReves = cadenaSinEspacios.split("").reverse();
 
  // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
  var iguales = true;
  for(i in letras) {
    if(letras[i] == letrasReves[i]) {
      // Todo bien
    }
    else {
      // Alguna letra es distinta, por lo que ya no es un palindromo
      iguales = false;
    }
  }
 
  if(iguales) {
    resultado += " es un palíndromo";
  }
  else {
    resultado += " no es un palíndromo";
  }
 
  return resultado;
}
 
alert(palindromo("La ruta nos aporto otro paso natural"));
alert(palindromo("Esta frase no se parece a ningun palindromo"));