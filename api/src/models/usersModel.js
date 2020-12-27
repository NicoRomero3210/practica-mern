const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    username:String,
    password:String,
})

module.exports = mongoose.model('users',usuarioSchema)