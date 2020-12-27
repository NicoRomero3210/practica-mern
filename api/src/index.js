import app from './app'
import fs from 'fs'
const NODE_ENV = process.env.NODE_ENV || "development"
if(fs.existsSync(`.env.${NODE_ENV}`)){
    require('node-env-file')(`.env.${NODE_ENV}`) 
}
const PORT = process.env.PORT

//inicio el server
app.listen(PORT,()=>{console.log(`Escuchando al puerto ${PORT}`)});