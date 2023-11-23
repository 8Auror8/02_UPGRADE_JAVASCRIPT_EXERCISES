/* Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 'Cucushumushu' y la mutación 'Porompompero'.
Una vez que los encuentres, añade la propiedad .mutation al alien con el valor de la mutación encontrada. */


const aliens = [
    { name: "Zalamero", planet: "Eden", age: 4029 },
    { name: "Paktu", planet: "Andromeda", age: 32 },
    { name: "Cucushumushu", planet: "Marte", age: 503021 },
];

const mutations = [
    {
        name: "Porompompero",
        description:
        "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
    },
    {
        name: "Fly me to the moon",
        description: "Permite volar, solo y exclusivamente a la luna",
    },
    {
        name: "Andando que es gerundio",
        description: "Invoca a un señor mayor como Personal Trainer",
    },
];


// Buscar el alien con nombre 'Cucushumushu'
const alienCucu = aliens.find(alien => alien.name === 'Cucushumushu');
console.log('eset es alien cucu', alienCucu);

// Si se encuentra el alien, buscar la mutación 'Porompompero'
if (alienCucu) {
    const mutationPorompompero = mutations.find(mutation => mutation.name === 'Porompompero');
    console.log('esta es mutacion poromp', mutationPorompompero.description);

    // Si se encuentra la mutación, agregar la propiedad .mutation al alien
    if (mutationPorompompero) {
        alienCucu.mutation = mutationPorompompero.description;
        console.log('esta es mutación de cucu', alienCucu.mutation);
    }
}
