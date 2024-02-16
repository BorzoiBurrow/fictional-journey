const Account = require("./accounts");
const posts = require("./posts");


Account.hasMany(posts, {
  foreignKey: 'ownerId', 
});

posts.belongsTo(Account, {
  foreignKey: 'ownerId', 
});

module.exports = { posts, Account };