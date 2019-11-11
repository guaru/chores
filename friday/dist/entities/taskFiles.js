"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TaskFile = _database.db.define('taskfiles', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  createdate: {
    type: _sequelize["default"].DATE
  },
  pathfile: {
    type: _sequelize["default"].TEXT
  },
  namefile: {
    type: _sequelize["default"].STRING
  },
  taskId: {
    type: _sequelize["default"].INTEGER
  }
}, {
  freezeTableName: true,
  timestamps: false
});

var _default = TaskFile;
exports["default"] = _default;