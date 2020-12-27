const userModel = require('../models/usersModel')

class Usuario{
    static async registrarUsuario(req,res){
        try{
            const {usuario} = req.body
            const modeloUsuario = new userModel(usuario);
            const respuesta = await modeloUsuario.save();
            res.json(respuesta)
        }catch(e){
            console.log(e);
            res.status(400)
            res.end()
        }
    }
    static async obtenerUsuarios(req,res){
        try{
            const usuarios = await userModel.find();
            res.json(usuarios)
        }catch(e){
            console.log(e)
            res.status(400)
            res.end()
        }
    }
}

module.exports = Usuario