//expres es quien controla la ruta
const express = require("express");
const UserRoutes = express.Router();

const { resgiterLargo, registerLargo } = require("../controllers/User.controllers");


//-----------------------------------
//!------RUTAS SIN REDIRECT---------
//  REDIRECT-->es que una ruta llama a otra ruta

UserRoutes.post(
  "/registerLargo",
  /*middleware de subida de fichero */ registerLargo
);

 //al final de esta funcion siempre va a estar la funcion del controlador

 //las rutas las consumen el index (ESQUEMA)

 module.exports = UserRoutes;