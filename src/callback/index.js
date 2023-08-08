//Es una funcion que pasa como argumento de otra funcion y que dentro sera llamada
//Ejemplo 1
function sum(a, b){
    return a + b;
}

function calc(a, b, callback){//esta es la funcion externa que recibira como argumento otra funcion
    return callback(a, b);//llamada a la funcion callback "sum"
}

console.log(calc(5, 5, sum));

//Ejemplo 2
function grettings(name) {
    console.log(`Hola ${name}`);
}

setTimeout(grettings, 5000, 'Jorge');

//Este ejemplo es tambien un callback dado que ya se esta mandando una funcion dentro de otra funcion.