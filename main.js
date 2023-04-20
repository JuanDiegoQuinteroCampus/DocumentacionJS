//CallBack

let llamado =  (elLlamado) =>{
    console.log("has llamado a facebook");
    elLlamado();
}

function usuario() {
    console.log("Se a recibido una notificacion de un llamada");
}

llamado(usuario)

/* Un callback es una función que se pasa como argumento a otra función y se invoca cuando se completa una operación asincrónica o cuando se produce algún evento.

Los callbacks son una forma común de manejar operaciones asincrónicas en JavaScript y se utilizan en muchos contextos, como solicitudes HTTP, operaciones de lectura / escritura de archivos y eventos de usuario en la interfaz de usuario.

La forma más común de utilizar un callback es pasar una función como argumento a una función asíncrona y llamar a esa función dentro del cuerpo de la función asíncrona cuando se completa la operación asincrónica. */

//CallBack and Promises

let numUsuario = new Promise (function(resolve, reject){
    let num = prompt("Dijite un Número del 1 al 10");
    if (num == 5 ) {
        resolve(num);
    } else {
        reject('El número puesto no es el indicado')
    }
});

numUsuario
.then(function(num) {
    console.log("El Número correcto es el ",num, " tu eleccion a sido la correcta");
})
.catch(function(error, num) {
    console.error(error);
})

/* Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y permite manejar el resultado cuando está disponible.

Las promesas son una forma más elegante y estructurada de manejar operaciones asíncronas en JavaScript que los callbacks tradicionales, ya que permiten encadenar varias operaciones asíncronas de forma más legible y manejar errores de manera más eficiente. */

