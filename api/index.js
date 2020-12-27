const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')
const fs = require('fs');
const NODE_ENV = process.env.NODE_ENV || "development"
if(fs.existsSync(`.env.${NODE_ENV}`)){
    require('node-env-file')(`.env.${NODE_ENV}`)
}
const PORT = process.env.PORT

//middlewares
app.use(morgan('dev'));

//inicio el server
app.listen(PORT,()=>{console.log(`Escuchando al puerto ${PORT}`)});