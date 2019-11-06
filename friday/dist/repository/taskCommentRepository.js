"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.findByTask = findByTask;
exports.findOne = findOne;
exports.deleteComment = deleteComment;

var _taskComments = _interopRequireDefault(require("../entities/taskComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function create(_x) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_comment) {
    var description, taskId;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            description = _comment.description, taskId = _comment.taskId;
            return _context.abrupt("return", _taskComments["default"].create({
              description: description,
              taskId: taskId
            }, {
              fields: ['description', 'taskId']
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _create.apply(this, arguments);
}

function findByTask(_x2) {
  return _findByTask.apply(this, arguments);
}

function _findByTask() {
  _findByTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(taskId) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _taskComments["default"].findAll({
              where: {
                taskId: taskId
              },
              order: [['id', 'DESC']]
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _findByTask.apply(this, arguments);
}

function findOne(_x3) {
  return _findOne.apply(this, arguments);
}

function _findOne() {
  _findOne = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(id) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _taskComments["default"].findOne({
              where: {
                id: id
              }
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _findOne.apply(this, arguments);
}

function deleteComment(_x4) {
  return _deleteComment.apply(this, arguments);
}

function _deleteComment() {
  _deleteComment = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(id) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _taskComments["default"].destroy({
              where: {
                id: id
              }
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteComment.apply(this, arguments);
}