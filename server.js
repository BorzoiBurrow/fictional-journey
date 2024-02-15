// imports
const express = require("express");
const sequelize = require('./config/connection');
const hbs = require('hbs')
const routes = require('./routes')

// define
const app = express();
const PORT = process.env.PORT || 3001;

app.set('view engine', 'hbs')
app.use(express.json());
app.use(routes)

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}!`)
})


sequelize.sync()
  .then(() => {
    console.log(`Synced to ${process.env.DB_NAME}`);
  });


