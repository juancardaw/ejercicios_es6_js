// 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];


// Aqui simplemente lo que hago es coger con el metodo slice la posicion del array 0 y 1, y despues saco de 2 hacia adelante. De esta manera la posicion 1 la elimino.
const coloresNuevo = [...colors.slice(0,1), ...colors.slice(2)]
console.log(coloresNuevo);

