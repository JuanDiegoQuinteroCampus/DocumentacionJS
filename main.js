/* STRINGS */

/* String.prototype.lastIndexOf()

El método lastIndexOf() devuelve la posicion (indice) en la que se encuentra el valorBusqueda, dentro del objeto String que realiza la llamada, de la última ocurrencia del valor especificado; o -1 si no se halla. La búsqueda se realiza empezando por el final de la cadena que realiza la llamada, empezando en indiceDesde.

Los caracteres de una cadena se indexan de izquierda a derecha. El índice del primer carácter es 0, y el índice del último carácter es nombreCadena.length - 1.
 */
let text = "Hello planet earth, you are a great planet.";
let result = text.lastIndexOf("planet"); 
/* 36 */

let text = "Hello planet earth, you are a great planet.";
let result = text.lastIndexOf("Planet"); 
/* -1 */