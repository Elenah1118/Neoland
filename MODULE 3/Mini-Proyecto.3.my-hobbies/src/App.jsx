// Importa el archivo de estilos CSS para la aplicación
import "./App.css";

// Importa los componentes desde sus respectivos archivos
import { Languages, Movies } from "./Components";

// Importa los componentes desde subcarpetas
import { Read } from "./Components/Read";
import { SongsHeard } from "./Components/SongsHeard";
import { Sports } from "./Components/Sports";

// Importa el objeto MyHobbies desde el archivo HOBBIES.js
import { MyHobbies } from "./Hobbies";

function App() {
  return (
    // Renderiza los componentes dentro de un contenedor general con la clase "ContainerGeneral"
    <div className="ContainerGeneral">
      {/* Renderiza el componente Read y pasa la lista de hobbies como prop "List" */}
      <Read List={MyHobbies} /> <br />
      
      {/* Renderiza el componente Sports y pasa la lista de hobbies como prop "Sports" */}
      <Sports Sports={MyHobbies} /> <br />
      
      {/* Renderiza el componente Movies y pasa la lista de hobbies como prop "Movies" */}
      <Movies Movies={MyHobbies} /> <br />
      
      {/* Renderiza el componente Languages y pasa la lista de hobbies como prop "List" */}
      <Languages List={MyHobbies} /> <br />
      
      {/* Renderiza el componente SongsHeard y pasa la lista de hobbies como prop "Songs" */}
      <SongsHeard Songs={MyHobbies} /> <br />
    </div>
  );
}

// Exporta el componente App por defecto
export default App;
