/* Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch()
y recibir los datos que devuelve. Imprimelo mediante un console.log(); */

const apiFunct = async () => {
    const request = await fetch(`https://api.agify.io?name=michael`);
    const response = await request.json();
    console.log(response);
}

apiFunct();