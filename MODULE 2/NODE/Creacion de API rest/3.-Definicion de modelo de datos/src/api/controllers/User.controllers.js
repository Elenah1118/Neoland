// primero requerimos las diferentes librerias que vamos a usar en nuestro proyecto
//! -------------LIBREBRIAS-
const nodemailer = require("nodemailer");
const validator = require("validator");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
//tenemos que configurar dotenv para poder utilizarlo 
dotenv.config();

//!---------------MODELOS------
const User = require("../models/User.model");


//------------------->CRUD es el acrónimo de "Crear, Leer, Actualizar y Borrar"
/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */


///
//! ----REGISTER LARGO EN CODIGO---
//van a ser asycronas

const registerLargo = async (req, res, next) =>{
try {
    return res.status(200).json("hola");
} catch (error) {
    
}
};

module.exports = {
    registerLargo,
};

