const Account = require("./accounts")
const posts = require("./posts")

Account.hasMany(posts);

posts.belongsTo(Account);


module.exports = {posts, Account}