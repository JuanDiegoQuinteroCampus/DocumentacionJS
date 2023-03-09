//Documentacion operadores//

/* Math.round()
La función Math.round()retorna el valor de un número redondeado al entero más cercano.
Si la porción fraccionaría del número es 0.5 o mayor, el argumento es redondeado al siguiente número entero superior. Si la porción de la fracción del número es menor a 0.5, el argumento es redondeado al siguiente número entero inferior.

Debido a que round() es un método estático de Math, siempre se debe utilizar como Math.round(), en vez de un método del objeto Math que ha creado. (Math no es un constructor)

en otras palabras hace una aproximacion a un numero entero dependiendo del numero decimal
 */
// Retorna el valor 20
x = Math.round(20.49);

// Retorna el valor 21
x = Math.round(20.5);

// Retorna el valor -20
x = Math.round(-20.5);

// Retorna el valor -21
x = Math.round(-20.51);