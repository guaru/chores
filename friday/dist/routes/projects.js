"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _project = require("../controllers/project.controller");

var router = (0, _express.Router)();
router.get('/:projectId', _project.findUsers);
router.get('/:projectId/status', _project.findStatus);
var _default = router;
exports["default"] = _default;