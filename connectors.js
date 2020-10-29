const { Sequelize } = require("sequelize");


const sequelize = new Sequelize ({
    dialect: "postgres",
    storage: "./"
})