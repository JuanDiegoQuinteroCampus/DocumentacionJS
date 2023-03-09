//Documentacion operadores//

/* Math.min()

La función Math.min() devuelve el menor de cero o más números, en otras palabras hace la selecion del numero mas pequeño
Si no se proporcionan argumentos, el resultado es Infinity.

Si al menos uno de los argumentos no puede ser convertido a número, el resultado es NaN. */

console.log(Math.min(2, 3, 1));
// Expected output: 1

console.log(Math.min(-2, -3, -1));
// Expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
// Expected output: 1
