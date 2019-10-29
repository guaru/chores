"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findUsers = findUsers;

var _projectUserRepository = require("../repository/projectUserRepository");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function findUsers(_x, _x2) {
  return _findUsers.apply(this, arguments);
}

function _findUsers() {
  _findUsers = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var projectId, users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(req);
            projectId = req.params.projectId;
            _context.next = 4;
            return (0, _projectUserRepository.findUsersByProject)(projectId);

          case 4:
            users = _context.sent;
            res.json(users);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _findUsers.apply(this, arguments);
}