const app = require('express')();
const morgan = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

//Conectar a la bd
mongoose.connect('mongodb://localhost/dbMongo').then(db=>{console.log('conectado')})
.catch(err=>{console.log('error')})
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
