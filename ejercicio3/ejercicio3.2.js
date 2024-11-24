// 3.2 Dado el siguiente array, devuelve una lista que contenga los valores  de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


const nuevoArrayy = users.map(users => 
    users.name.startsWith("A") ? "Anacleto" : users.name
);

console.log(nuevoArrayy);

// Apunte: El startWith se utiliza para hacer referencia a la primera palabra
// Y despues, tenemos aqui un condicional ternario, del cual primero verifica si el nombre empieza por A, seria verdadero, lo caul lo cambiar el nommbre que hemos puesto