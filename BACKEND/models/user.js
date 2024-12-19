const { DataTypes } = require('sequelize');
const db = require('../config/db'); // Sequelize connection instance

const User = db.define('User', {
    USER_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NAME: {
        type: DataTypes.STRING,
        allowNull: false
    },
    EMAIL: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    PASSWORD_HASH: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PHONE_NO: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ROLE: {
        type: DataTypes.ENUM('Artist', 'Customer'),
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: true, // Adds createdAt and updatedAt
    createdAt: 'CREATED_AT',
    updatedAt: 'UPDATED_AT'
});

module.exports = User;
