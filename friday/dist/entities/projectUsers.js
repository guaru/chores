"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _users = _interopRequireDefault(require("./users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProjectUser = _database.db.define('projectusers', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  projectId: {
    type: _sequelize["default"].INTEGER
  },
  userId: {
    type: _sequelize["default"].INTEGER
  }
}, {
  freezeTableName: true,
  timestamps: false
});

ProjectUser.belongsTo(_users["default"], {
  foreingKey: 'userId',
  sourceKey: 'id'
});
var _default = ProjectUser;
exports["default"] = _default;