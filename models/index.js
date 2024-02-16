const Account = require("./accounts");
const posts = require("./posts");


Account.hasMany(posts, {
  foreignKey: 'ownerId', 
});

posts.belongsTo(Account, {
  foreignKey: 'owner_id', 
});

module.exports = { posts, Account };