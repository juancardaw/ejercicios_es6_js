// 3.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


// aqui lo que hacemos con el metodo maps es sacar los nommbres de los objetos introducidos en el arrayy anterior
const nuevoArray = users.map(users => users.name);

console.log(nuevoArray);