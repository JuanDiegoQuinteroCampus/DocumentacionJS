//Documentacion operadores//

/* Math.random()
La función Math.random() devuelve un número de coma flotante pseudo-aleatorio, comprendido en el rango de 0 a menor que 1 (es decir, incluido el 0 pero no el 1), con una distribución aproximadamente uniforme en este rango. Dicho rango puede ser ampliado hasta los valores deseados. La implementación selecciona la semilla inicial del algoritmo de generación de números aleatorios, no pudiendo ser esta elegida o restablecida por el usuario. 
(Elije un numero aleatorio)
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // Expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // Expected output: 0
  
  console.log(Math.random());
  // Expected output: a number from 0 to <1
  
