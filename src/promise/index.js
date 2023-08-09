const cows = 9;

const countCows = new Promise(function (resolve, reject) {
    if(cows > 10){
        resolve(`We have ${cows} cows on the farm`);
    }else{
        reject('There is no cows on the farm');
    }
});
//Mandamos llamar a la promesa con '.then' y con una funcion flecha mostramos el 
//resultado con un 'console.log'. sera el 'resolve' o el 'reject' que haya retornado
//nuestra promesa.
countCows.then((result) => {
    console.log(result);
}).catch((error) => { //Aqui se mostrara con un catch el error del reject de la promesa
    console.log(error);
}).finally(() => console.log('Finished'));//esto siempre se va a ejecutar sea resolve o sea reject. dando a entender el final de la promesa.

/*otra sintaxis es retornar en una funcion directamente la promesa.
function x(time, message){
    return new Promise (resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, time);
    }
}
*/