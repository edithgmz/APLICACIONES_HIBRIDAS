import express from 'express';

export default class Server{
    public app: express.Application;
    public port: number = 3000;

    constructor(){
        this.app = express();
    }

    //Inicialización del puerto
    start(callback: Function){
        this.app.listen(3000, function(){
            console.log('Este es el puerto 3000');
        });
    }
}
