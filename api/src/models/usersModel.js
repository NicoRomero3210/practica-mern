import {Schema,model} from 'mongoose'
import bcrypt from 'bcrypt'

const usuarioSchema = new Schema({
    username:{
        type: String,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    roles:[{
        ref: 'Rol',
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
})

usuarioSchema.statics.encryptPasswords = async(password)=>{
    const salt = await bcrypt.genSaltSync(10)
    const hash = await bcrypt.hashSync(password,salt)
    return hash
}
usuarioSchema.statics.comparePasswords = async(password,receivedPass)=>{
    return await bcrypt.compareSync(password,receivedPass)
}

export default model('UsuarioModel',usuarioSchema)