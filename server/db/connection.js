const mongoose = require('mongoose')


//connect to db
const DB_CONN = (DB_HOST) => {
    mongoose.connect(DB_HOST, (err) => {
        if(err) return false;
        console.log("DB CONNECTED")
        return true
    })
}

module.exports = DB_CONN