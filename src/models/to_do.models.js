const { DataTypes } = require('sequelize');
const myDataBase = require('../utilis/database')

const ToDo = myDataBase.define( "toDo", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: "is_completed"
    }
} );

module.exports = ToDo;
