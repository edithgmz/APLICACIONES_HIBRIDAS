import jwt from 'jsonwebtoken';

//Los métodos deben ser estáticos para que funcionen
export default class Token {
    //Esto contiene los datos
    private static seed: string = 'este-es-el-seed-de-mi-app-secreto';
    //Tiempo de validez
    private static caducidad: string = '30d';

    constructor() { }

    //Método para firmar la app
    static getJwtToken(payload: any): string {
        return jwt.sign({usuario: payload}, this.seed, {expiresIn: this.caducidad});
    }

    static comprobarToken(userToken: string) {
        return new Promise((resolve, reject) => {
            jwt.verify(userToken, this.seed, (err, decode) => {
                if(err) reject();
                else resolve(decode);
            })
        });
    }
}
