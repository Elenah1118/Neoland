// 1. Crea una aplicación de ReactJS con vite → name: jsx-basics.
// 2. Renderiza “Buenos días” [6-12] , “Buenas tardes” [13-19] o “Buenas noches”[20-5] según el valor numérico asignado.
// 3. Recorrer los elementos de un array y renderizalos ⇒ Si os da un error de keys en la consola podéis usar el index como `key={index}` .
// 4. Mappea un array de objetos para pintarlos.
// 5. Crea un botón que modifique un valor de false a true y renderice un contenido cuando este valor se modifique.

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Parrafo } from "./Components";
import React from 'react';

const Hello = () => {
	return <h1>Hello there!</h1>;
}

const App =() => {
  const [count, setCount] = useState (0);
  const [valor, setValor] = useState (0);


  const actualizarEstado = () => {
    setCount((value) => value + 1);
    console.log("estado debajo de la aztualizacion", count);
  };

  const print = () =>{
  if (count > 5 && count < 13) {
    return <Parrafo texto={"Buenos dias"} />;
  } else if (count > 12 && count < 20) {
    return <Parrafo texto={"Buenas tardes"} />;
  } else {
    return <Parrafo texto={"Buenas noches"} />; // Aquí corregí 'Parrado' a 'Parrafo'
  }
};


const nombres = ["Ivan", "Elena"];
 
const personas = [
  {
    nombre: "Maria",
    edad: "34"
  },
  {
    nombre: "Candela",
    edad: "11"
  },
];
 const toggleValor = () => {
  setValor(!valor);  //Boton que modifique true o false(false a true)
 };

  return (
    <>
      <div>
        {console.log("estado en el template ", count)}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {print()}

      <h2>nombres:</h2>
      {nombres.map((nombres, index) => (
        <Parrafo key={index} texto={nombres} />
      ))}
      
      <h2>Personas:</h2>
      {personas.map((persona, index) => (
        <div key={index}>
          <p>Nombre: {persona.nombre}</p>
          <p>Edad: {persona.edad}</p>
        
        </div>
      ))}

      <h1>Mini proyecto</h1>
      <div className="card">
        <button onClick={() => actualizarEstado()}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Parrafo
        className="read-the-docs"
        texto={"Click on the Vite and React logos to learn more"}
      />
    </>
  );
};


export default App;

