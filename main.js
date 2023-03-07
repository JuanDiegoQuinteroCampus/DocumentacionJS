/* STRINGS */

/* String.prototype.trim()

El método trim( ) elimina los espacios en blanco en ambos extremos del string. Los espacios en blanco en este contexto, son todos los caracteres sin contenido (espacio, tabulación, etc.) y todos los caracteres de nuevas lineas (LF,CR,etc.). */


let text = "     Hello World!     ";
let result = text.trim();

document.getElementById("demo1").innerHTML = text;
document.getElementById("demo2").innerHTML = result;

  /*    Hello World!     

Hello World!         */