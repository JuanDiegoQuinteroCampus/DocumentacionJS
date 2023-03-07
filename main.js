/* STRINGS */

/* String.raw()

String. raw() es la unica función de etiqueta incorporada en las plantillas string; trabaja igual que la función de la plantilla por defecto y ejecuta la concatenación. Incluso puedes reimplementarlo con código normal de JavaScript
El método estatico String.raw() es una función de plantilla de literales (en-US), similar al prefijo r en Python o al prefijo @ en C# para strings literales (con ciertas diferencias: ver la explicación en este problema). Se utiliza para obtener un string crudo a partir de plantillas de string (es decir, el original, texto no interpretado). */

String.raw`Hi\n${2+3}!`;
//el carácter después de 'Hi'
// no es un carácter de nueva línea,
// '\' y 'n' son dos caracteres.