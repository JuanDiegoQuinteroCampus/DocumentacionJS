//Documentacion operadores//

/* Math.trunc()

La función Math.trunc() devuelve la parte entera de un numero removiendo cualquier dígito decimal (dígitos situados después de la coma).

en otras palabras elimina la parte decimal */

Math.trunc(13.37);    // 13
Math.trunc(42.84);    // 42
Math.trunc(0.123);    //  0
Math.trunc(-0.123);   // -0
Math.trunc('-1.123'); // -1
Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN
