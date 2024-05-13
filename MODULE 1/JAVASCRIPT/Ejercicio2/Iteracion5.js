
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

// Definición de la función averageWord que calcula el promedio de los elementos del arreglo
function averageWord(array) {
  let sum = 0; // Variable para almacenar la suma de los números o las longitudes de las cadenas
  let count = 0; // Contador para llevar la cuenta del número total de elementos

  // Iteración sobre cada elemento del arreglo
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      sum += array[i]; // Si el elemento es un número, se suma directamente a la variable sum
    } else if (typeof array[i] === 'string') {
      sum += array[i].length; // Si el elemento es una cadena, se suma la longitud de la cadena a la variable sum
    }
    count++; // Se incrementa el contador en cada iteración para contar el número total de elementos
  }

  // Se devuelve el promedio dividiendo la suma total entre el número total de elementos
  return sum / count;
}
console.log(averageWord(mixedElements)); 