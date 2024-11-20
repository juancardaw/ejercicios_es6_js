// 1.4 En base al siguiente javascript, usa destructuring para crear las 
// variables name y itv con sus respectivos valores. Posteriormente crea 
// 3 variables usando igualmente el destructuring para cada uno de los años 
// y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };

// Destructuro en este caso los valores del objeto
const {name, itv} = car;
console.log(name);
console.log(itv);


// Ahora destrucuro en este caso el valor del objeto de ITV
const {itv:[fecha1, fecha2, fecha3]} = car;

console.log(fecha1);
console.log(fecha2);
console.log(fecha3);