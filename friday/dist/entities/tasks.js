"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _users = require("../entities/users");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Task = _database.db.define('tasks', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  enddate: {
    type: _sequelize["default"].DATE
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  projectId: {
    type: _sequelize["default"].INTEGER
  },
  statusId: {
    type: _sequelize["default"].INTEGER
  },
  owneruserId: {
    type: _sequelize["default"].INTEGER
  },
  devuserId: {
    type: _sequelize["default"].INTEGER
  }
}, {
  freezeTableName: true,
  timestamps: false
});

var _default = Task;
exports["default"] = _default;