//El objeto generator es retornado por una funcion generator y es conformado tanto el protocolo
//iterable como el protocolo iterador.
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterable(array){//una funcion genradora iteradora
    for(let value of array){//iteramos un array que fue pasado como argumento
        yield value;//valores a mostrar
    }
}
const it = iterable(['jorge','pablo','ana','rosa']);//constante que va a obtener el resultado de la funcion iteradora.
console.log(it.next());//mostrar el resultado