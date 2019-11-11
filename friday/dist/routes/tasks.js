"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _task = require("../controllers/task.controller");

var router = (0, _express.Router)();
router.post('/createComment', _task.createCommet);
router.get('/findComments/:taskId', _task.findComments);
router["delete"]('/deleteComment/:commentId', _task.deleteTaskComment);
router.post('/upload-file/:id', _task.uploadFile);
router.get('/findFiles/:taskId', _task.findFiles);
router.get('/download/:taskFileId', _task.download);
router.get('/file/:taskFileId', _task.getFile);
var _default = router;
exports["default"] = _default;