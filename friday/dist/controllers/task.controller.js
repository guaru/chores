"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCommet = createCommet;
exports.findComments = findComments;
exports.deleteTaskComment = deleteTaskComment;
exports.uploadFile = uploadFile;
exports.findFiles = findFiles;
exports.download = download;
exports.getFile = getFile;

var _taskCommentRepository = require("../repository/taskCommentRepository");

var _taskFileRepository = require("../repository/taskFileRepository");

var _taskRepository = require("../repository/taskRepository");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fs = require('fs');

var path = require('path');

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
/**
 * FILE TASK
 */


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

function uploadFile(_x7, _x8) {
  return _uploadFile.apply(this, arguments);
}

function _uploadFile() {
  _uploadFile = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var EDFile, id, pathfile, namefile, taskfile, files;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            EDFile = req.files.file;
            id = req.params.id;
            pathfile = "./files/".concat(EDFile.name);
            namefile = EDFile.name;
            EDFile.mv(pathfile, function (err) {
              if (err) return res.status(500).send({
                message: err
              });
            });
            _context4.next = 8;
            return (0, _taskFileRepository.create)({
              taskId: id,
              namefile: namefile,
              pathfile: path.resolve(pathfile)
            });

          case 8:
            taskfile = _context4.sent;
            _context4.next = 11;
            return (0, _taskFileRepository.findByTask)(id);

          case 11:
            files = _context4.sent;
            updateComplements(id, true);
            return _context4.abrupt("return", res.status(200).json(files));

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(500).send({
              message: 'ERROR INTERNO'
            }));

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 16]]);
  }));
  return _uploadFile.apply(this, arguments);
}

function findFiles(_x9, _x10) {
  return _findFiles.apply(this, arguments);
}

function _findFiles() {
  _findFiles = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var taskId, files;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            taskId = req.params.taskId;
            _context5.next = 4;
            return (0, _taskFileRepository.findByTask)(taskId);

          case 4:
            files = _context5.sent;
            res.status(200).json(files);
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              error: 'ERROR INTERNO'
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return _findFiles.apply(this, arguments);
}

function download(_x11, _x12) {
  return _download.apply(this, arguments);
}

function _download() {
  _download = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var taskFileId, file, _file;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            taskFileId = req.params.taskFileId;
            _context6.next = 3;
            return (0, _taskFileRepository.findOne)(taskFileId);

          case 3:
            file = _context6.sent;
            _file = file.pathfile;
            res.download(_file);

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _download.apply(this, arguments);
}

function getFile(_x13, _x14) {
  return _getFile.apply(this, arguments);
}

function _getFile() {
  _getFile = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var taskFileId, file, _file;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            taskFileId = req.params.taskFileId;
            console.log("FILE", taskFileId);
            _context7.next = 4;
            return (0, _taskFileRepository.findOne)(taskFileId);

          case 4:
            file = _context7.sent;
            _file = file.pathfile;
            res.sendFile(_file);

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getFile.apply(this, arguments);
}

function updateComplements(taskId, push) {
  (0, _taskRepository.findOne)(taskId).then(function (task) {
    if (push) task.complements += 1;else task.complements -= 1;
    (0, _taskRepository.editTask)(task).then(function (data) {});
  });
}