const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// test line to check .env is loaded
console.log(process.env.greeting);


 const Sequelize = require('sequelize');


 const sequelize = process.env.JAWSDB_URL
   ? new Sequelize(process.env.JAWSDB_URL)
   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
       host: 'localhost',
       dialect: 'mysql',
       dialectOptions: {
         decimalNumbers: true,
      },
    });

 module.exports = sequelize;