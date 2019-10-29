"use strict";

require("@babel/polyfill");

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _projects = _interopRequireDefault(require("./routes/projects"));

var _tasks = _interopRequireDefault(require("./routes/tasks"));

var _projectRepository = require("./repository/projectRepository");

var _statusRepository = require("./repository/statusRepository");

var _taskRepository = require("./repository/taskRepository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import app from './app';

/*async function main(){
    await app.listen(4000);
    console.log('Server init ok!');
}


main();*/
//Importing  routes
var app = (0, _express["default"])();

var http = require('http').Server(app);

var io = require('socket.io')(http);

var path = require('path');

var bodyParser = require('body-parser'); //middleware


app.use((0, _morgan["default"])('dev'));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use((0, _express.json)());
app.use(bodyParser.urlencoded({
  extended: false
})); // Point static path to dist

app.use(_express["default"]["static"](path.join(__dirname, '../dist/socket-app')));
io.on("connection", function (socket) {
  var previousId;

  var safeJoin = function safeJoin(currentId) {
    socket.leave(previousId);
    socket.join(currentId);
    previousId = currentId;
  };

  var emitTableros = function emitTableros() {
    (0, _projectRepository.getAll)().then(function (data) {
      io.emit("tableros", data);
    })["catch"](function (e) {
      console.log('ERROR', e);
    });
  };

  socket.on("getTablero", function (docId) {
    safeJoin(docId);
    (0, _projectRepository.findOne)(docId).then(function (data) {
      socket.emit("tablero", data);
      (0, _statusRepository.findStatusByProject)(docId).then(function (data) {
        console.log('TABLERO', data);
        socket.emit("status", data);
      });
    });
  });
  socket.on("addTablero", function (doc) {
    (0, _projectRepository.create)(doc).then(function (data) {
      safeJoin(data.id);
      socket.emit("tablero", doc);
      (0, _projectRepository.initStatusProject)(data.id).then(function (data) {
        console.log("INIT PROJECT OK!");
      });
      emitTableros();
    });
  });
  socket.on("editTablero", function (doc) {
    (0, _projectRepository.update)(doc).then(function (data) {
      (0, _projectRepository.findOne)(doc.id).then(function (tablero) {
        socket.to(tablero.id).emit("tablero", tablero);
        emitTableros();
      });
    });
  });
  socket.on("addTask", function (task) {
    (0, _taskRepository.createTask)(task).then(function (newTask) {
      (0, _statusRepository.findStatusByProject)(newTask.projectId).then(function (data) {
        // socket.emit("status", data);
        socket.to(newTask.projectId).emit("status", data);
        io.to(newTask.projectId).emit("status", data);
      });
    });
  });
  socket.on("editTask", function (task) {
    (0, _taskRepository.editTask)(task).then(function (newTask) {
      (0, _statusRepository.findStatusByProject)(task.projectId).then(function (data) {
        // socket.emit("status", data);
        socket.to(task.projectId).emit("status", data);
        io.to(task.projectId).emit("status", data);
      });
    });
  });
  emitTableros();
}); //import routes

app.use('/api/tablero/', _projects["default"]);
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/socket-app/index.html'));
});
http.listen(9080);