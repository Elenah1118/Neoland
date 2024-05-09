//expres es quien controla la ruta
const express = require("express");
const UserRoutes = express.Router();

const {
  registerLargo,
  registerUtil,
  registerWithRedirect,
  sendMailRedirect,
  // resendCode,
} = require("../controllers/User.controllers");
const { upload } = require("../../middleware/files.middleware");



//-----------------------------------
//!------RUTAS SIN REDIRECT---------

//  REDIRECT-->es que una ruta llama a otra ruta
UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);
UserRoutes.post("/registerUtil", upload.single("image"), registerUtil);
// UserRoutes.post("/resend", resendCode);
 //al final de esta funcion siempre va a estar la funcion del controlador

 //las rutas las consumen el index (ESQUEMA)

 
//!------------------------------------------------------------------------
//?--------------------------------RUTAS CON REDIRECT----------------------
//!------------------------------------------------------------------------
UserRoutes.post("/register", upload.single("image"), registerWithRedirect);

//!---------------- REDIRECT-------------------------------
UserRoutes.post("/register/sendMail/:id", sendMailRedirect);
module.exports = UserRoutes;
