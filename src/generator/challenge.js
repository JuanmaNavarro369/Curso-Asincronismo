
import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

/* creamos la funcion de fetchData la cual utiliza la Api y retornamos la información en un tipo objeto JSON, implementando la logica de async y await, en este ejemplo
usamos una arrow function */

 const fetchData = async (urlApi) => {
    const respuesta = await fetch(urlApi);
    const data = await respuesta.json();
    return data;
};

/* Creamos la función que realiza las solicitudes. En este caso usaremos también yield y el "*" al lado de function para identificar un generator.
También usamos async y await para hacer el llamado de los productos y demás */

async function* generator(urlApi) {

    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

/* Se utiliza yield para dar una pausa a la ejecución y utilizamos .next() para dar inicio a el codigo */

    yield console.log(products);
    yield console.log(product.title);
    yield console.log(category.name);
    
};

const gen = generator(API);

gen.next();