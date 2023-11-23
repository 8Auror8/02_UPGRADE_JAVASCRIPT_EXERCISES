/* Convierte la siguiente función con un fetch utilizando async-await.
Recuerda que para usar .fetch()
tendrás que probar el ejercicio en el navegador;
 */

async function getCharacters () {
    try{
        const respose = await fetch('https://rickandmortyapi.com/api/character')
        const characters = await Response.json();
        console.log(characters);
    }catch(error){
        console.error('Error en la solicitud fetch::', error);
    }

}

getCharacters();

