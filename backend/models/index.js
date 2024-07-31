const config = require(__dirname + '/../config/config.json')["development"];
const Sequelize = require('sequelize');



const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};
const TodoModel = require('./Todo')(sequelize, Sequelize);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Todo = TodoModel;



module.exports = db;
