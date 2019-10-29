"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findUsersByProject = findUsersByProject;

var _projectUsers = _interopRequireDefault(require("../entities/projectUsers"));

var _users = _interopRequireDefault(require("../entities/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function findUsersByProject(_x) {
  return _findUsersByProject.apply(this, arguments);
}

function _findUsersByProject() {
  _findUsersByProject = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(projectId) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _projectUsers["default"].findAll({
              where: {
                projectId: projectId
              },
              include: [{
                model: _users["default"]
              }]
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _findUsersByProject.apply(this, arguments);
}