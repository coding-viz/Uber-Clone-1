const mongoose = require('mongoose');

function conectDB() {
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        console.log('Connected to DB');
    }).catch(err => console.error(err));
}

module.exports = conectDB;