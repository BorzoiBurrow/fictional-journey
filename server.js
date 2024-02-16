// imports
const express = require("express");
const sequelize = require('./config/connection');
const hbs = require('hbs')
const routes = require('./routes')
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.set('view engine', 'hbs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const sessionStore = new SequelizeStore({
  db: sequelize,
});


app.use(session({
  secret: process.env.SIGNATURE,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    maxAge: 10 * 60 * 1000, 
  },
}));


app.use(routes)

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}!`)
})


sequelize.sync()
  .then(() => {
    console.log(`Synced to ${process.env.DB_NAME}`);
  });


