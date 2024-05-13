const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  const repeatCounter = (array) => {
    const contador = {};
   for (let i = 0; i < array.lenght; i++) { 
    // Si la palabra ya está en el contador, incrementamos su valor
    // Si no, la inicializamos en 1
    if (contador[array[i]]) {
        contador[array[i]]++;
      } else {
        contador[array[i]] = 1;
      }
   }
   return contador;// Devolvemos el objeto contador
};
  // Probamos la función con el array de palabras
const resultado = repeatCounter(counterWords);
console.log(resultado);