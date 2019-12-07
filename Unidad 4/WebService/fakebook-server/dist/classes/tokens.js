"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//Los métodos deben ser estáticos para que funcionen
class Token {
    constructor() {
    }
    //Método para firmar la app
    static getJwtToken(payload) {
        return jsonwebtoken_1.default.sign({ usuario: payload }, this.seed, { expiresIn: this.caducidad });
    }
    static comprobarToken(userToken) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(userToken, this.seed, (err, decode) => {
                if (err)
                    reject();
                else
                    resolve(decode);
            });
        });
    }
}
exports.default = Token;
//Esto contiene los datos
Token.seed = 'este-es-el-seed-de-mi-app-secreto';
//Tiempo de validez
Token.caducidad = '30d';
