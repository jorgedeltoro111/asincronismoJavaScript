import fetch from 'node-fetch';
const API = 'https:/api.escuelajs.co/api/v1';
/*
Ejemplo 1
function fetchData(urlAPI){
    return fetch(urlAPI);
};

fetchData(`${API}/products`)//vamos a mandar el llamado a la api
    .then(response => response.json())//lo convertimos en objeto json la informacion que recibimos de la API
    .then(products => {//mostramos los productos
        console.log(products);
    })
    .catch(error => {//realizamos un catch por si sucede un error
        console.log(error);
    })
    */
   //Ejemplo 2 sencillo para realizar una peticion a una API
    // fetch(`${API}/products`)
    //     .then(response => response.json())//convertir a json 
    //     .then(products => {console.log(products)})//mostrarlo
    //     .catch((error)=>console.log(error));//caso de error
    
    //Ejemplo 3 de varias llamadas a la API consecuentes 
    function fetchData(urlAPI){
        return fetch(urlAPI);
    };
    fetchData(`${API}/products`)//Obtenemos todos los productos
        .then(response => response.json())//la respuesta la convertimos a un objeto json
        .then(products => {
            console.log(products);//mostramos los productos
            return fetchData(`${API}/products/${products[0].id}`)//vamos a pedirle que nos traiga el id del primer producto
        })
        .then(response => response.json())//convertimos esa llamada a objeto json
        .then(product => {
            console.log(product.title);//mostramos el titulo del producto 0
            return fetchData(`${API}/categories/${product.category.id}`)//del producto 0, traemos el id de la categoria
        })
        .then(response => response.json())//lo convertimos a objeto json
        .then(category => {
            console.log(category.name);//la categoria mostramos su nombre
        })
        .catch((error)=>console.log(error));//el caso de error