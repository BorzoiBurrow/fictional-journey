const { Model, DataTypes, DatabaseError } = require('sequelize');
const Account = require("./accounts.js")
const sequelize = require('../config/connection.js');

class posts extends Model {}

posts.init(
  {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
   },
   text: {
    type: DataTypes.TEXT,
    allowNull: false
   },
   time: {
    type: DataTypes.TIME,
    defaultValue: DataTypes.NOW,
    allowNull: false
   }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts',
  }
);
posts.belongsTo(Account, { foreignKey: 'id' });

module.exports = posts;
