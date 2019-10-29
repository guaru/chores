"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _tasks = _interopRequireDefault(require("./tasks"));

var _status = _interopRequireDefault(require("./status"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Project = _database.db.define('projects', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  priority: {
    type: _sequelize["default"].INTEGER
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  deliverydate: {
    type: _sequelize["default"].DATE
  }
}, {
  freezeTableName: true,
  timestamps: false
});

Project.hasMany(_tasks["default"], {
  foreingKey: 'projectId',
  sourceKey: 'id'
});

_tasks["default"].belongsTo(Project, {
  foreingKey: 'projectId',
  sourceKey: 'id'
});

Project.hasMany(_status["default"], {
  foreingKey: 'projectId',
  sourceKey: 'id'
});

_status["default"].belongsTo(Project, {
  foreingKey: 'projectId',
  sourceKey: 'id'
});

var _default = Project;
exports["default"] = _default;