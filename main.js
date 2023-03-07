/* STRINGS */

/* String.prototype.search()

El método search() ejecuta una búsqueda que encaje entre una expresión regular y el objeto String desde el que se llama.
Cuando se desee saber en qué casos un patrón se encuentra en una cadena de texto utiliza search() (si sólo deseas saber si existe, utiliza el método test() del prototipo de RegExp); para más información (pero de ejecución más lenta) utiliza match() (similar al método exec() de las expresiones regulares).
El search()método compara una cadena con una expresión regular **

El search()método devuelve el índice (posición) de la primera coincidencia.

El search()método devuelve -1 si no se encuentra ninguna coincidencia.

El search()método distingue entre mayúsculas y minúsculas. */

let text = "Mr. Blue has a blue house";
let position = text.search("blue"); 