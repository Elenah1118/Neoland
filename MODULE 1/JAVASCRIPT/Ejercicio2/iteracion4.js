

function average(array) {
  let sum = 0;
// Inicialización de la variable sum para almacenar la suma de los números
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
 // Suma de cada número al valor actual de sum
  return sum / array.length;
}

console.log(average(numbers)); 
