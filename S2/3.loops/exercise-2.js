//Usa un forin para imprimir por consola los datos del alienigena.

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for(let item in alien){
    console.log(item, alien[item])
}

