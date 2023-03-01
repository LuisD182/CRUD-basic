const { Sequelize } = require('sequelize')
const myDataBase = new Sequelize ({
    database: 'to_do',
    port: 5432,
    host: 'localhost',
    username: 'postgres',
    password: 'ruut',
    dialect: 'postgres'
})

module.exports = myDataBase;