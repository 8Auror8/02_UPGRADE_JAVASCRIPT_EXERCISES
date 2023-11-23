function crearPlanta(tipo, zona, tamaño, color){
    return{
        tipo: tipo,
        zona: zona,
        tamaño: tamaño,
        color: color,
}
}


let poto = crearPlanta('poto', 'interior', 'mediano', 'verde');

console.log(poto)

if('tipo' in poto){
    console.log("Sí! La planta tiene un tipo!")
}