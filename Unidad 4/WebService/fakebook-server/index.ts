import Server from './classes/server';
import userRoutes from './routes/usuario';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const server = new Server();

//Body Parser: La información que recibe la acomoda
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//Conexión a base de datos
mongoose.connect('mongodb://localhost:27017/fakebook', {useNewUrlParser: true, useCreateIndex: true},
    (err)=>{
        if(err) throw err;
        console.log('Base de datos ONLINE');
});

//Rutas de la app
server.app.use('/user', userRoutes);

//Levantar express
server.start(() => {
    console.log(`Servidor corriendo en puerto ${server.port}`);
});
