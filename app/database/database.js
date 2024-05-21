require('dotenv').config();
const Sequelize = require('sequelize')

// console.log(process.env.DB_DIALECT)

const sequelize = new Sequelize({
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_STORAGE
});

try {
    sequelize.authenticate();
    console.log('Ok');
}catch(err) {
    console.error('Hiba!', err);
}