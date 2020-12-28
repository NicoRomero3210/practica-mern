import UsuarioModel from '../models/usersModel'

class Usuario{
    static async registrarUsuario(req,res){
        try{
            const {usuario} = req.body
            const nuevoUsuario = new UsuarioModel(usuario)
            const respuesta = await nuevoUsuario.save();
            res.json(respuesta)
        }catch(e){
            console.log(e);
            res.status(400)
            res.end()
        }
    }
    static async obtenerUsuarios(req,res){
        try{
            const usuarios = await UsuarioModel.fin;
            res.json(usuarios)
        }catch(e){
            console.log(e)
            res.status(400)
            res.end()
        }
    }
    static async login(req,res){
        try{
            res.json("gato")
        }catch(e){

        }
    }
}

export default Usuario