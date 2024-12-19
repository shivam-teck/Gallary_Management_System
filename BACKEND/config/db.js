const { Sequelize } = require('sequelize');

const db = new Sequelize('gallery_db', 'root', '1', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

db.authenticate()
    .then(() => console.log('Database connected successfully.'))
    .catch(err => console.error('Database connection error:', err));

module.exports = db;
