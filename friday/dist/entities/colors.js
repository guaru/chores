"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _status = _interopRequireDefault(require("./status"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Color = _database.db.define('colors', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  text: {
    type: _sequelize["default"].STRING
  },
  background: {
    type: _sequelize["default"].STRING
  }
}, {
  freezeTableName: true,
  timestamps: false
});

Color.hasMany(_status["default"], {
  foreingKey: 'colorId',
  sourceKey: 'id'
});

_status["default"].belongsTo(Color, {
  foreingKey: 'colorId',
  sourceKey: 'id'
});

var _default = Color;
exports["default"] = _default;