import express,{json} from 'express';
import morgan from 'morgan';
import http from 'http';

//Importing  routes
import projectRoutes from  './routes/projects';
import  taskRoutes from './routes/tasks';


//init
const app =  express();
const server = http.Server(app);
const io = require('socket.io')(http);



//middleware
app.use(morgan('dev'));
app.use(json());

//import routes
app.use('/api/projects/',projectRoutes);
app.use('/api/tasks',taskRoutes);


export default server;