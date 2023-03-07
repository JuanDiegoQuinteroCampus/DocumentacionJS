/* STRINGS */

/* String.fromCharCode()
El String.fromCharCode() método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
Este método devuelve una cadena y no un objeto String.

Debido a que fromCharCode es un método estático de String, usted siempre lo usará como String.fromCharCode(), en vez de un método de un objeto String creado por usted.
 */
String.fromCharCode(65, 66, 67);   //devuelve "ABC"
String.fromCharCode(0x2014);       //devuelve "-"
String.fromCharCode(0x12014);      //también devuelve "-";el dígito 1 se trunca y se ignora
String.fromCharCode(8212);         //también devuelve "-";8212 es la forma decimal de 0x2014