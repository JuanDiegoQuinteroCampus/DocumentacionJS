/* FUNCIONES */

/* Tipos de funciones */


/* Funciones como objetos

Es un enfoque que no se suele utilizar en producción. Simplemente es interesante saberlo para darse cuenta que en Javascript todo pueden ser objetos:
 */
const saludar = new Function("return 'Hola';");

saludar(); // 'Hola'