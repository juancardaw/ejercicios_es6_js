// 3.3 Dado el siguiente array, devuelve una lista que contenga los valores  de la propiedad .name y añade al valor de .name el string ' (Visitado)'  cuando el valor de la propiedad isVisited = true.

const cities = [
    { isVisited: true, name: 'Tokyo' },
    { isVisited: false, name: 'Madagascar' },
    { isVisited: true, name: 'Amsterdam' },
    { isVisited: false, name: 'Seul' }
  ];
  

//   Atencion con las comillas, que por eso no me funcionaba a la hora de sacar el nombre de la ciudad junto con la visita
const nuevoArray = cities.map(ciudad => {
    return ciudad.isVisited ? `${ciudad.name} (Visitado)` : ciudad.name;
});

console.log(nuevoArray);