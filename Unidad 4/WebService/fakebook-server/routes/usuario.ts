import { Router, Request, Response } from 'express';
import { Usuario } from '../models/usuario.model';
import bcrypt from 'bcrypt';
import Token from '../classes/tokens';
import { verificarToken } from '../middleware/autenticacion';

const userRoutes = Router();

/* Prueba para verificar que los métodos funcionan
    userRoutes.get('/prueba', (req: Request, res: Response) => {
        res.json({
            ok: true,
            mensaje: 'Todo funciona bien'
        });
    });
*/
//Crear usuario
userRoutes.post('/create', (req: Request, res: Response) => {
  const user = {
    nombre: req.body.nombre,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    avatar: req.body.avatar
  }
  //Crear usuario con el contenido del request
  Usuario.create(user).then(userDB => {
        //Datos con los que se generará el token del usuario
        const tokenUser = Token.getJwtToken({
            _id: userDB._id,
            nombre: userDB.nombre,
            email: userDB.email,
            avatar: userDB.avatar
        })
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
userRoutes.post('/login', (req: Request, res: Response) => {
    const body = req.body;
    //Verificar que el correo existe
    Usuario.findOne({email: body.email}, (err, userDB) => {
        if (err) throw err;
        if (!userDB){
            return res.json({
                ok: false,
                mensaje: 'usuario/Correo incorrecto'
            });
        }
        //Comparar contraseñas
        if(userDB.compararPassword(body.password)){
            //Datos con los que se generará el token del usuario
            const tokenUser = Token.getJwtToken({
                _id: userDB._id,
                nombre: userDB.nombre,
                email: userDB.email,
                avatar: userDB.avatar
            })
            res.json({
                ok: true,
                token: tokenUser
            });
        } else{
            return res.json({
                ok: false,
                mensaje: 'usuario/Contraseña incorrecta.'
            });
        }
    })
});
//Actualizar usuario
userRoutes.post('/update', verificarToken, (req: any, res: Response) => {
  const user = {
    nombre: req.body.nombre || req.usuario.nombre,
    email: req.body.email || req.usuario.email,
    avatar: req.body.avatar || req.usuario.avatar
  }
  //Busca el usuario y lo actualiza
  Usuario.findByIdAndUpdate(req.usuario._id, user, {new: true}, (err, userDB) => {
    if(!err) throw err;
    if(!userDB){
        return res.json({
            ok: false,
            mensaje: 'No existe ese ID.'
        });
    }
    //Se genera un nuevo token al actualizar el usuario
    const tokenUser = Token.getJwtToken({
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
export default userRoutes;
