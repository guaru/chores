//import app from './app';
import '@babel/polyfill';

/*async function main(){
    await app.listen(4000);
    console.log('Server init ok!');
}


main();*/

import express,{json} from 'express';
import morgan from 'morgan';

//Importing  routes
import projectRoutes from  './routes/projects';
import  taskRoutes from './routes/tasks';
import {create,getAll,findOne,deleteOne,update,initStatusProject} from  './repository/projectRepository';
import {findStatusByProject} from './repository/statusRepository';
import {createTask,editTask} from './repository/taskRepository';
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const bodyParser = require('body-parser');

//middleware
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use(json());

app.use(bodyParser.urlencoded({ extended: false }));
// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist/socket-app')));

io.on("connection", socket => {
    let previousId;
    const safeJoin = currentId => {
      socket.leave(previousId);
      socket.join(currentId);
      previousId = currentId;
    };

    const emitTableros = ()=>{
        getAll().then(data=>{
          io.emit("tableros", data);
      }).catch(e=>{
         console.log('ERROR',e);
      });
    };
  
    socket.on("getTablero", docId => {
      safeJoin(docId);
      findOne(docId).then(data=>{
        socket.emit("tablero", data);
        findStatusByProject(docId).then(data=>{
          console.log('TABLERO',data);
          socket.emit("status", data);
        });
      });

    });
  
    socket.on("addTablero", doc => {
      create(doc).then(data=>{
        safeJoin(data.id);
        socket.emit("tablero", doc);
        initStatusProject(data.id).then(data=>{
          console.log("INIT PROJECT OK!");
        });
        emitTableros();
      });
    });
  
    socket.on("editTablero", doc => {
       update(doc).then(data=>{
        findOne(doc.id).then(tablero=>{
          socket.to(tablero.id).emit("tablero", tablero);
          emitTableros();
        });
       });
    });



    socket.on("addTask",task =>{
        createTask(task).then(newTask=>{
          findStatusByProject(newTask.projectId).then(data=>{
           // socket.emit("status", data);
            socket.to(newTask.projectId).emit("status", data);
            io.to(newTask.projectId).emit("status",data);
          });
        });
    });

    socket.on("editTask",task =>{
      editTask(task).then(newTask=>{
        findStatusByProject(task.projectId).then(data=>{
         // socket.emit("status", data);
          socket.to(task.projectId).emit("status", data);
          io.to(task.projectId).emit("status",data);
        });
      });
  });

 
  
     emitTableros();
    
  });


//import routes
app.use('/api/tablero/',projectRoutes);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/socket-app/index.html'));
});

  
  http.listen(9080);