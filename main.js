/* STRINGS */

/* String.prototype.match()
El método match() devuelve todas las ocurrencias de una expresión regular dentro de una cadena.
La implementación de String.prototype.match en sí es muy simple. Se llama al método Symbol.match del argumento con la cadena como primer parámetro. La implementación real proviene de RegExp.prototype[@@match]() (en-US). */

const str = 'Para más información, consulte el Capítulo 3.4.5.1';
const re = /consulte el (capítulo \d+(\.\d)*)/i;
const found = str.match(re)

console.log(found);
// [
//   'consulte el Capítulo 3.4.5.1',
//   'Capítulo 3.4.5.1',
//   '.1',
//   index: 22,
//   input: 'Para más información, consulte el Capítulo 3.4.5.1',
//   groups: undefined
// ]
/* ----------------------------------------- */
/* En el resultado anterior:

    'consulte el Capítulo 3.4.5.1' es la ocurrencia completa.
    'Capítulo 3.4.5.1' fue capturado por (capítulo \d+(\.\d)*).
    '.1' fue el último valor capturado por (\.\d).
    La propiedad index (22) es el índice de la coincidencia completa.
    La propiedad input es la cadena original que se analizó. */
