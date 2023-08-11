import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';//url a la API

//Creamos una funcion para enviar nuestra informacion a la API.
function postData(urlAPI, data){
    const response = fetch(urlAPI, {
        method: 'POST', 
        mode: 'corse',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
    });
    return response;
}

const data = {//estructura del producto para enviar a la API.
    "title": "333",
    "price": 333,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

  postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));
    //funcion para obtener
    // fetch(`${API}/products/218`)
    //     .then(response => response.json())
    //     .then(data => console.log(data));
