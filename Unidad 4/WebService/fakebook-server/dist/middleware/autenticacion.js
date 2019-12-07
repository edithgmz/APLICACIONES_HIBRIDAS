"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tokens_1 = __importDefault(require("../classes/tokens"));
//En req se pone any porque recibe valores de diferentes lugares
exports.verificarToken = (req, res, next) => {
    const userToken = req.get('x-token' || '');
    tokens_1.default.comprobarToken(userToken).then((decoded) => {
        console.log('decoded: ', decoded);
        req.usuario = decoded.usuario;
        //Se hace algo repetitivo
        next();
    }).catch(err => {
        res.json({
            ok: false,
            mensaje: 'Token incorrecto.'
        });
    });
};
