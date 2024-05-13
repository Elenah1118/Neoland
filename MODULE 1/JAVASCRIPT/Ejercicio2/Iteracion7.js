const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
  const finderName = (array, valor) => { // Declaración correcta de la función flecha con dos parámetros
    for (let i = 0; i < array.length; i++) { // Corrección de la longitud del array (length, no lenght)
      if (array[i] === valor) { 
        return { encontrado: true, position: i }; // Cambio de "position" a "posicion" por consistencia
      }
    }
    return { encontrado: false }; // Declaración correcta de un objeto con la propiedad "encontrado" establecida en false
  };
  
  // Ejemplo de uso
  const resultado = finderName(nameFinder, 'Tony');
  console.log(resultado);

  