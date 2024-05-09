const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors')
const { connect } = require("./src/utils/db");
dotenv.config();

//creamos el servidor web
const app = express();

//traer del env. la variable de entorno del port(puerto)
const PORT = process.env.PORT;
console.log(PORT);


//cors----> configurar el que se puede hsver en el back
app.use(cors());

//! ------------------ limitaciones de cantidad en el back end
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

//! -------ROUTES APP(
    

//!ERRORES GENERALES Y RUTA NO ENCONTRADA(cuando la ruta no este contemplada)
app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});

// ----- en este caso como gestionamos un error la callback lleva de parametros error, req, res
// cuando es un controlador normal llevaria siempre como para parametros REQ, RES, NEXT ---> en este orden siemppre
app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});

//! ----ESCUCHAMOS EN EL PUERTO EL SERVIDOR WEB-----

// esto de aqui  nos revela con que tecnologia esta hecho nuestro back
app.disable("x-powered-by");
app.listen(PORT, () =>
  console.log(`Server listening on port 👌🔍 http://localhost:${PORT}`)
);
