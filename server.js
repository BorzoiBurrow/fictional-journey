const express = require("express");
const sequelize = require('./config/connection');
const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(routes);


// sync with sequel database and log the success
sequelize.sync()
.then(() => {

console.log("connected");

})