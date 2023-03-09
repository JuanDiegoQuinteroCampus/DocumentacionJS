//Documentacion operadores//

/* Math.PI */
/* 
La propiedad Math.PI representa la relacion entre la longitud de la circunferencia de un circulo y su diametro, la cual es aproximadamente 3.14159.
Debido a que PI es una propiedad estatica del modulo Math, siempre debes de utilizarla como Math.PI, en lugar de una propiedad de un objeto Math que tu hayas creado ( Math no es un constructor ). */

function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }
  
  console.log(Math.PI);
  // Expected output: 3.141592653589793
  
  console.log(calculateCircumference(10));
  // Expected output: 62.83185307179586
  