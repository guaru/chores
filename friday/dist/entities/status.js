"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _tasks = _interopRequireDefault(require("./tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Status = _database.db.define('status', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].STRING
  },
  colorId: {
    type: _sequelize["default"].INTEGER
  },
  projectId: {
    type: _sequelize["default"].INTEGER,
    name: 'projectId'
  },
  position: {
    type: _sequelize["default"].INTEGER
  }
}, {
  freezeTableName: true,
  timestamps: false
});

Status.hasMany(_tasks["default"], {
  foreingKey: 'statusId',
  sourceKey: 'id'
});

_tasks["default"].belongsTo(Status, {
  foreingKey: 'statusId',
  sourceKey: 'id'
});

var _default = Status;
exports["default"] = _default;