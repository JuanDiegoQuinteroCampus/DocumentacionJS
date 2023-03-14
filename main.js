/* FUNCIONES */

/* Tipos de funciones */

/* Clausuras

A grandes rasgos, en Javascript, una clausura o cierre se define como una función que «encierra» variables en su propio ámbito 
(y que continúan existiendo aún habiendo terminado la función). Por ejemplo, veamos el siguiente ejemplo:
 */
// Clausura: Función incr()
const incr = (function () {
  let num = 0;
  return function () {
    num++;
    return num;
  };
})();

typeof incr; // 'function'
incr(); // 1
incr(); // 2
incr(); // 3
/* La «magia» de las clausuras es que en el interior de la función autoejecutable estamos creando una variable num que se guardará en el ámbito de dicha función, por lo tanto existirá con el valor declarado: 0.

Por lo tanto, en la variable incr tenemos una función por expresión que además conoce el valor de una variable num, que sólo existe dentro de incr. Si nos fijamos en la función que devolvemos, lo que hace es incrementar el valor de num y devolverlo. Como la variable incr es una clausura y mantiene la variable en su propio ámbito, veremos que a medida que ejecutamos incr(),
 los valores de num (que estamos devolviendo) conservan su valor y se van incrementando. */