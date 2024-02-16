const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class Account extends Model {
  // checking password match
  checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
}
// create the account model
Account.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      // Before creating a new account, hash the password using bcrypt.
      beforeCreate: async (newAccount) => {
        newAccount.password = await bcrypt.hash(newAccount.password, 12);
        return newAccount;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'account',
  }
);

module.exports = Account;
