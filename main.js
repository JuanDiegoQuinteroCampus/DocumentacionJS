/* FUNCIONES */

/* Tipos de funciones */


/* Arrow functions

Las Arrow functions, funciones flecha o «fat arrow» son una forma corta de escribir funciones que aparece en Javascript a partir de ECMAScript 6.
 Básicamente, se trata de reemplazar eliminar la palabra function y añadir => antes de abrir las llaves:
 */
const func = function () {
  return "Función tradicional.";
};

const func = () => {
  return "Función flecha.";
};

/* Sin embargo, las funciones flechas tienen algunas ventajas a la hora de simplificar código bastante interesantes:

    Si el cuerpo de la función sólo tiene una línea, podemos omitir las llaves ({}).
    Además, en ese caso, automáticamente se hace un return de esa única línea, por lo que podemos omitir también el return.
    En el caso de que la función no tenga parámetros, se indica como en el ejemplo anterior: () =>.
    En el caso de que la función tenga un solo parámetro, se puede indicar simplemente el nombre del mismo: e =>.
    En el caso de que la función tenga 2 ó más parámetros, se indican entre paréntesis: (a, b) =>.
    Si queremos devolver un objeto, que coincide con la sintaxis de las llaves, se puede englobar con paréntesis: ({name: 'Manz'}).

Por lo tanto, el ejemplo anterior se puede simplificar aún más: */

const func = () => "Función flecha."; // 0 parámetros: Devuelve "Función flecha"
const func = (e) => e + 1; // 1 parámetro: Devuelve el valor de e + 1
const func = (a, b) => a + b; // 2 parámetros: Devuelve el valor de a + b