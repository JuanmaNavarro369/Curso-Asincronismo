import fetch from "node-fetch"
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlAPI) {
    return fetch(urlAPI);
};

// fetchData(`${API}/products/`)
//     .then(respuesta => respuesta.json())
//     .then(products => {
//         console.log(products)
//     })
//     .catch(error => console.log(error));

fetchData(`${API}/products/`)
    .then(respuesta => respuesta.json())

    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
    }) .then(respuesta => respuesta.json())

    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)
    }) .then (respuesta => respuesta.json())

    .then(category => {
        console.log(category.name)
    })

    .catch(error => console.log(err));