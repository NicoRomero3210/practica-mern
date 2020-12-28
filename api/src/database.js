import fs from 'fs'
const NODE_ENV = process.env.NODE_ENV || "development"
if(fs.existsSync(`.env.${NODE_ENV}`)){
    require('node-env-file')(`.env.${NODE_ENV}`)
}
import mongoose from 'mongoose'
mongoose.connect(process.env.CONN_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    user: process.env.USUARIO,
    pass: process.env.CONTRASEÑA,
    keepAlive: true
})
.then(db=>{console.log('conectado')})
.catch(err=>{console.log(err)})