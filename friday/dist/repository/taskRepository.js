"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTask = createTask;
exports.editTask = editTask;
exports.findOne = findOne;

var _tasks = _interopRequireDefault(require("../entities/tasks"));

var _users = _interopRequireDefault(require("../entities/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createTask(_x) {
  return _createTask.apply(this, arguments);
}

function _createTask() {
  _createTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_task) {
    var id, name, status, project, task;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _task.id, name = _task.name, status = _task.status, project = _task.project;
            task = _tasks["default"].create({
              id: id,
              name: name,
              statusId: status.id,
              projectId: project.id
            }, {
              fields: ['name', 'statusId', 'projectId']
            });
            return _context.abrupt("return", task);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createTask.apply(this, arguments);
}

function editTask(_x2) {
  return _editTask.apply(this, arguments);
}

function _editTask() {
  _editTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_task) {
    var id, name, status, project, statusId, enddate, owneruserId, devuserId, task;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = _task.id, name = _task.name, status = _task.status, project = _task.project, statusId = _task.statusId, enddate = _task.enddate, owneruserId = _task.owneruserId, devuserId = _task.devuserId;
            task = _tasks["default"].update({
              name: name,
              statusId: statusId,
              enddate: enddate,
              owneruserId: owneruserId,
              devuserId: devuserId
            }, {
              where: {
                id: id
              }
            });
            return _context2.abrupt("return", task);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _editTask.apply(this, arguments);
}

function findOne(_x3) {
  return _findOne.apply(this, arguments);
}

function _findOne() {
  _findOne = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(id) {
    var task;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _tasks["default"].findOne({
              where: {
                id: id
              },
              include: [{
                model: _users["default"],
                as: 'owneruser'
              }, {
                model: _users["default"],
                as: 'devuser'
              }]
            });

          case 2:
            task = _context3.sent;
            return _context3.abrupt("return", task);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _findOne.apply(this, arguments);
}