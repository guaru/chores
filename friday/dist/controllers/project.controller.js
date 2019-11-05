"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findUsers = findUsers;
exports.findStatus = findStatus;

var _projectUserRepository = require("../repository/projectUserRepository");

var _statusRepository = require("../repository/statusRepository");

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
            projectId = req.params.projectId;
            _context.next = 3;
            return (0, _projectUserRepository.findUsersByProject)(projectId);

          case 3:
            users = _context.sent;
            res.json(users);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _findUsers.apply(this, arguments);
}

function findStatus(_x3, _x4) {
  return _findStatus.apply(this, arguments);
}

function _findStatus() {
  _findStatus = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var projectId, status;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            projectId = req.params.projectId;
            console.log('project id', projectId);
            _context2.next = 4;
            return (0, _statusRepository.findStatusByProject)(projectId);

          case 4:
            status = _context2.sent;
            res.json(status);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _findStatus.apply(this, arguments);
}