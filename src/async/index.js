//La declaracion de funcion async define una funcion asincrona, la cual devuelve un objeto.

/*
La siguiente funcion tiene una promesa que esta va a retornar un resolve o un reject,
dentro de esta promesa habra un if ternario donde siempre entrara al caso verdadero porque asi lo estamos
indicando. que va a mostrar una cadena de texto 'async' despues de que pasen 2 segundos.
*/
const fnAsync = () => {
    return new Promise ((resolve, reject)=>{
        (true) ? setTimeout(() => resolve('async'), 2000) : reject(new Error('error'));
    })
}
/**En la siguiente funcion estamos definiendo una funcion donde estamos utilizando la sintaxis de async
 * esto para garantizar que podremos utilizar la palabra reservada await dentro de la misma funcion.
 * despues dentro de la funcion vamos a crear una constante pero en vez de darle un valor.
 * vamos a utilizar la palabra reservada await y llamamos a la funcion que creamos con la promesa. 
 * lo que hara es esperar hasta obtener una respuesta.
 */
const anotherFn = async () => {
    const something = await fnAsync();//esta esperando a que termine la funcion anterior por eso no se ejecuta todo el codigo dentro de esta funcion.
    console.log(something);
    console.log('Hello');
}

console.log('Before');
anotherFn();
console.log('After');