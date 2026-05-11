'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

// Reads DB config
const config = require(__dirname + '/../config/config.cjs')[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  // This line creates DB connection.
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  // Loads all models automatically
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-4) === '.cjs' &&
      file.indexOf('.test.cjs') === -1
    );
  })
  .forEach(file => {
    const fun = require(path.join(__dirname, file))
    const model = fun(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
