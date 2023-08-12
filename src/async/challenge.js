import fecth from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';
//Primer forma de utilizar async con una funcion tradicional
async function fetchData(urlApi){
    const response = await fetch(urlApi);//Obtenemos toda la informacion
    const data = await response.json();//la convertimos a un objeto json
    return data;//retornamos la informacion
}
//Segunda forma de utilizar async con una funcion flecha
const anotherFn = async (urlApi) => {
    try{//bloque try catch para asegurar de que si falla tener un bloque de codigo para ese caso en especifico. 
        const products = await fetchData(`${API}/products`);//obtenemos los productos
        const product = await fetchData(`${API}/products/${products[0].id}`);//obtenemos el id del primer producto
        const category = await fetchData(`${API}/categories/${product.category.id}`);//obtenemos la categoria del producto.

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error){
        console.error(error);
    }
}

anotherFn(API);