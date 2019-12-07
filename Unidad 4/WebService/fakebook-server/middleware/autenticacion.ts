import { Response, Request, NextFunction } from 'express';
import Token from '../classes/tokens';

//En req se pone any porque recibe valores de diferentes lugares
export const verificarToken = (req: any, res: Response, next: NextFunction) => {
    const userToken = req.get('x-token' || '');
    Token.comprobarToken(userToken).then((decoded: any) => {
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
}
