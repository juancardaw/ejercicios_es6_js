// 2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};


// Hacemos en este caso la copia del objeto.. Por lo que veo la unica diferencia entre un array un y unn obbjeto a la hora de sacarlo son las comillas
const copiaObjeto = {...toy};
console.log(copiaObjeto);