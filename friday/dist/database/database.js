"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db = new _sequelize["default"]('friday', 'ufriday', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 200,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false
});
exports.db = db;