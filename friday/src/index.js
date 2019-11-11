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
import {createTask,editTask,findOne as findOneTask} from './repository/taskRepository';
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
//middleware
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use(fileUpload());
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
          findOneTask(newTask.id).then(data=>{
            io.emit("newTask",data);
          });
        });
    });

    socket.on("notifyTask",taskId =>{
        findOneTask(taskId).then(data=>{
          io.emit("changeTask",{task:data,beforeStatusId:data.statusId});
        });
    });

    socket.on("editTask",task =>{
      findOneTask(task.id).then(beforeTask=>{
        const beforeStatusId  = beforeTask.statusId;
        editTask(task).then(newTask=>{
          findOneTask(task.id).then(data=>{
             io.emit("changeTask",{task:data,beforeStatusId:beforeStatusId});
           });
        });
      });
     
  });

 
  
     emitTableros();
    
  });


//import routes
app.use('/api/tablero/',projectRoutes);
app.use('/api/task/',taskRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/socket-app/index.html'));
});

  
  http.listen(9080);