"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TaskComment = _database.db.define('taskcomments', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  createdate: {
    type: _sequelize["default"].DATE
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  taskId: {
    type: _sequelize["default"].INTEGER
  }
}, {
  freezeTableName: true,
  timestamps: false
});

var _default = TaskComment;
exports["default"] = _default;