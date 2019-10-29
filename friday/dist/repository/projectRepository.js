"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAll = getAll;
exports.findOne = findOne;
exports.create = create;
exports.initStatusProject = initStatusProject;
exports.update = update;
exports.deleteOne = deleteOne;

var _projects = _interopRequireDefault(require("../entities/projects"));

var _status = _interopRequireDefault(require("../entities/status"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getAll() {
  return _getAll.apply(this, arguments);
}

function _getAll() {
  _getAll = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var projects;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _projects["default"].findAll({
              order: [['id', 'ASC']]
            });

          case 2:
            projects = _context.sent;
            return _context.abrupt("return", projects);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAll.apply(this, arguments);
}

function findOne(_x) {
  return _findOne.apply(this, arguments);
}

function _findOne() {
  _findOne = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(id) {
    var project;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _projects["default"].findOne({
              where: {
                id: id
              }
            });

          case 2:
            project = _context2.sent;
            return _context2.abrupt("return", project);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _findOne.apply(this, arguments);
}

function create(_x2) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req) {
    var name, priority, description, deliverydate, newProject;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            name = req.name, priority = req.priority, description = req.description, deliverydate = req.deliverydate;
            _context3.prev = 1;
            _context3.next = 4;
            return _projects["default"].create({
              name: name,
              priority: 1,
              description: description,
              deliverydate: '2019-01-01'
            }, {
              fields: ['name', 'priority', 'description', 'deliverydate']
            });

          case 4:
            newProject = _context3.sent;
            return _context3.abrupt("return", newProject);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            return _context3.abrupt("return", null);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _create.apply(this, arguments);
}

function initStatusProject(_x3) {
  return _initStatusProject.apply(this, arguments);
}

function _initStatusProject() {
  _initStatusProject = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(projectId) {
    var status;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log(projectId);
            _context4.next = 3;
            return _status["default"].create({
              name: 'ANALISIS',
              colorId: 2,
              projectId: projectId
            }, {
              fields: ['name', 'colorId', 'projectId']
            });

          case 3:
            status = _context4.sent;
            _context4.next = 6;
            return _status["default"].create({
              name: 'PENDIENTES',
              colorId: 3,
              projectId: projectId
            }, {
              fields: ['name', 'colorId', 'projectId']
            });

          case 6:
            status = _context4.sent;
            _context4.next = 9;
            return _status["default"].create({
              name: 'PRUEBAS',
              colorId: 4,
              projectId: projectId
            }, {
              fields: ['name', 'colorId', 'projectId']
            });

          case 9:
            status = _context4.sent;
            _context4.next = 12;
            return _status["default"].create({
              name: 'LISTO',
              colorId: 1,
              projectId: projectId
            }, {
              fields: ['name', 'colorId', 'projectId']
            });

          case 12:
            status = _context4.sent;
            return _context4.abrupt("return", status);

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _initStatusProject.apply(this, arguments);
}

function update(_x4) {
  return _update.apply(this, arguments);
}

function _update() {
  _update = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(tablero) {
    var id, name, priority, description, deliverydate, result;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = tablero.id, name = tablero.name, priority = tablero.priority, description = tablero.description, deliverydate = tablero.deliverydate;
            _context5.next = 3;
            return _projects["default"].update({
              name: name,
              priority: priority,
              description: description,
              deliverydate: deliverydate
            }, {
              where: {
                id: id
              }
            });

          case 3:
            result = _context5.sent;
            return _context5.abrupt("return", result);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _update.apply(this, arguments);
}

function deleteOne(_x5, _x6) {
  return _deleteOne.apply(this, arguments);
}

function _deleteOne() {
  _deleteOne = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(res, req) {
    var id, isDelete;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = res.params.id;
            _context6.next = 3;
            return _projects["default"].destroy({
              where: {
                id: id
              }
            });

          case 3:
            isDelete = _context6.sent;
            return _context6.abrupt("return", isDelete);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _deleteOne.apply(this, arguments);
}