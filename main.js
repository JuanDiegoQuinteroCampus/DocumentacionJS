/* STRINGS */

/* String.prototype.concat()

El método concat() combina dos o más cadenas de texto y devuelve una cadena de texto nueva.
 */
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"

/* > "Hello World"
> "World, Hello" */