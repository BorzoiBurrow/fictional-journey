const express = require("express");
const sequelize = require('./config/connection');
const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
  })

// sync with sequel database and log the success
sequelize.sync()
.then(() => {
console.log(`synced to ${process.env.DB_NAME}`);
})

