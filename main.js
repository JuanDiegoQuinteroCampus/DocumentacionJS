/* FUNCIONES */

/* Tipos de funciones */


/* Funciones por declaración
Esta forma permite declarar una función que existirá a lo largo de todo el código:
 */function saludar() {
  return "Hola";
}

saludar(); // 'Hola'
typeof saludar; // 'function'
/* 
De hecho, podríamos ejecutar la función saludar() incluso antes de haberla creado y funcionaría correctamente,
 ya que Javascript primero busca las declaraciones de funciones y luego procesa el resto del código. */