/* FormData()


Los objetos FormData le permiten compilar un conjunto de pares clave/valor para enviar mediante XMLHttpRequest. Están destinados principalmente para el envío de 
los datos del formulario, pero se pueden utilizar de forma independiente con el fin de transmitir los datos tecleados. Los datos transmitidos estarán en el mismo 
formato que usa el método submit() del formulario para enviar los datos si el tipo de codificación del formulario se establece en "multipart/form-data".
 */
var formData = new FormData();

formData.append("username", "Groucho");
formData.append("accountnum", 123456); // number 123456 is immediately converted to string "123456"

/* Recuperando un objeto FormData de un formulario HTML

Para construir un objeto FormData que contenga los datos de un <form> existente, especifique ese elemento form cuando cree el objeto FormData:
 */
var formData = new FormData(someFormElement);

/* Por ejemplo: */

var formElement = document.getElementById("myFormElement");
var request = new XMLHttpRequest();
request.open("POST", "submitform.php");
request.send(new FormData(formElement));

/* También puede añadir datos adicionales al objeto FormData antes de enviarlo. Así:
 */
var formElement = document.getElementById("myFormElement");
formData = new FormData(formElement);
formData.append("serialnumber", serialNumber++);
request.send(formData);
