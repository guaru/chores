"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCommet = createCommet;
exports.findComments = findComments;
exports.deleteTaskComment = deleteTaskComment;

var _taskCommentRepository = require("../repository/taskCommentRepository");

var _taskRepository = require("../repository/taskRepository");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createCommet(_x, _x2) {
  return _createCommet.apply(this, arguments);
}

function _createCommet() {
  _createCommet = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _comment, comments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _comment = req.body;
            _context.next = 4;
            return (0, _taskCommentRepository.create)(_comment);

          case 4:
            _comment = _context.sent;
            _context.next = 7;
            return (0, _taskCommentRepository.findByTask)(_comment.taskId);

          case 7:
            comments = _context.sent;
            updateComplements(_comment.taskId, true);
            res.json(comments);
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              error: 'ERROR INTERNO'
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _createCommet.apply(this, arguments);
}

function findComments(_x3, _x4) {
  return _findComments.apply(this, arguments);
}

function _findComments() {
  _findComments = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var taskId, comments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            taskId = req.params.taskId;
            _context2.next = 4;
            return (0, _taskCommentRepository.findByTask)(taskId);

          case 4:
            comments = _context2.sent;
            res.json(comments);
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              error: 'ERROR INTERNO'
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _findComments.apply(this, arguments);
}

function deleteTaskComment(_x5, _x6) {
  return _deleteTaskComment.apply(this, arguments);
}

function _deleteTaskComment() {
  _deleteTaskComment = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var commentId, _comment, comments;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            commentId = req.params.commentId;
            _context3.next = 4;
            return (0, _taskCommentRepository.findOne)(commentId);

          case 4:
            _comment = _context3.sent;
            _context3.next = 7;
            return (0, _taskCommentRepository.deleteComment)(commentId);

          case 7:
            comments = _context3.sent;
            updateComplements(_comment.taskId, false);
            res.json(comments);
            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              error: 'ERROR INTERNO'
            });

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return _deleteTaskComment.apply(this, arguments);
}

function updateComplements(taskId, push) {
  (0, _taskRepository.findOne)(taskId).then(function (task) {
    if (push) task.complements += 1;else task.complements -= 1;
    (0, _taskRepository.editTask)(task).then(function (data) {});
  });
}