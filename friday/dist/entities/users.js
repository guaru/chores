"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _tasks = _interopRequireDefault(require("../entities/tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var User = _database.db.define('users', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].STRING
  },
  lastname: {
    type: _sequelize["default"].STRING
  },
  email: {
    type: _sequelize["default"].STRING
  }
}, {
  freezeTableName: true,
  timestamps: false
}); //User.hasMany(Task,{foreingKey:'owneruserId',sourceKey: 'id',as:'owneruserId'});


_tasks["default"].belongsTo(User, {
  foreingKey: 'owneruserId',
  sourceKey: 'id',
  as: 'owneruser'
}); //User.hasMany(Task,{foreingKey:'devuserId',sourceKey: 'id',as:'devuserId'});


_tasks["default"].belongsTo(User, {
  foreingKey: 'devuserId',
  sourceKey: 'id',
  as: 'devuser'
});

var _default = User;
exports["default"] = _default;