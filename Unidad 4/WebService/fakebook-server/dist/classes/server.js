"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.port = 3000;
        this.app = express_1.default();
    }
    //Inicialización del puerto
    start(callback) {
        this.app.listen(3000, function () {
            console.log('Este es el puerto 3000');
        });
    }
}
exports.default = Server;
