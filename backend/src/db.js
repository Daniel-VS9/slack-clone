require('dotenv').config();
const {connect, connection} = require('mongoose');

(async() => {
    try {
        await connect(process.env.MONGO_URL, {})
        console.log('MongoDB connection success')
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
})();

const db = connection;

module.exports = db;