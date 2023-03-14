/* FUNCIONES */

/* Tipos de funciones */


/* Funciones anónimas

Las funciones anónimas o funciones lambda son un tipo de funciones que se declaran sin nombre de función 
y se alojan en el interior de una variable y haciendo referencia a ella cada vez que queramos utilizarla:
 */// Función anónima "saludo"
const saludo = function () {
  return "Hola";
};

saludo; // ƒ () { return 'Hola'; }
saludo(); // 'Hola'
/* la última línea del ejemplo anterior, estamos ejecutando la variable, es decir, ejecutando la 
función que contiene la variable. Sin embargo, en la línea anterior hacemos referencia a la variable 
(sin ejecutarla, no hay paréntesis) y nos devuelve la función en sí. */