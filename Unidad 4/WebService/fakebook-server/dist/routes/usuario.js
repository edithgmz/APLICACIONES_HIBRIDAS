"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_model_1 = require("../models/usuario.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const tokens_1 = __importDefault(require("../classes/tokens"));
const autenticacion_1 = require("../middleware/autenticacion");
const userRoutes = express_1.Router();
/* Prueba para verificar que los métodos funcionan
    userRoutes.get('/prueba', (req: Request, res: Response) => {
        res.json({
            ok: true,
            mensaje: 'Todo funciona bien'
        });
    });
*/
//Crear usuario
userRoutes.post('/create', (req, res) => {
    const user = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: bcrypt_1.default.hashSync(req.body.password, 10),
        avatar: req.body.avatar
    };
    //Crear usuario con el contenido del request
    usuario_model_1.Usuario.create(user).then(userDB => {
        //Datos con los que se generará el token del usuario
        const tokenUser = tokens_1.default.getJwtToken({
            _id: userDB._id,
            nombre: userDB.nombre,
            email: userDB.email,
            avatar: userDB.avatar
        });
        res.json({
            ok: true,
            token: tokenUser
        });
        /*No se utilizan porque se envía todo al Token
        //Crea usuario si no existe
        res.json({
            ok: true,
            user: userDB
        });
        //Devuelve el usuario existente
        res.json({
            ok: true,
            user
        });*/
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});
//Login
userRoutes.post('/login', (req, res) => {
    const body = req.body;
    //Verificar que el correo existe
    usuario_model_1.Usuario.findOne({ email: body.email }, (err, userDB) => {
        if (err)
            throw err;
        if (!userDB) {
            return res.json({
                ok: false,
                mensaje: 'usuario/Correo incorrecto'
            });
        }
        //Comparar contraseñas
        if (userDB.compararPassword(body.password)) {
            //Datos con los que se generará el token del usuario
            const tokenUser = tokens_1.default.getJwtToken({
                _id: userDB._id,
                nombre: userDB.nombre,
                email: userDB.email,
                avatar: userDB.avatar
            });
            res.json({
                ok: true,
                token: tokenUser
            });
        }
        else {
            return res.json({
                ok: false,
                mensaje: 'usuario/Contraseña incorrecta.'
            });
        }
    });
});
//Actualizar usuario
userRoutes.post('/update', autenticacion_1.verificarToken, (req, res) => {
    const user = {
        nombre: req.body.nombre || req.usuario.nombre,
        email: req.body.email || req.usuario.email,
        avatar: req.body.avatar || req.usuario.avatar
    };
    //Busca el usuario y lo actualiza
    usuario_model_1.Usuario.findByIdAndUpdate(req.usuario._id, user, { new: true }, (err, userDB) => {
        if (!err)
            throw err;
        if (!userDB) {
            return res.json({
                ok: false,
                mensaje: 'No existe ese ID.'
            });
        }
        //Se genera un nuevo token al actualizar el usuario
        const tokenUser = tokens_1.default.getJwtToken({
            _id: userDB._id,
            nombre: userDB.nombre,
            email: userDB.email,
            avatar: userDB.avatar
        });
        res.json({
            ok: true,
            token: tokenUser
        });
    });
});
//Exportar constante
exports.default = userRoutes;
