import {Schema,model} from 'mongoose'

const rolSchema = new Schema(
    {
        nombre:{
            type: String
        }
    },
    {
        versionKey: false
    }
)

export default model('Rol',rolSchema)