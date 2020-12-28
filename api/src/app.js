import {initialRoles} from './libs/initialSetup'
const app = require('express')();
initialRoles();
const morgan = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({
    origin:['localhost:3000','localhost:3001']
}))

//Rutas
app.use('/api/usuarios',require('./routes/user'))

export default app
