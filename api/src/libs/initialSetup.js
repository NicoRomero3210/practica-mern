import Rol from '../models/rolesModel'

export const initialRoles = async()=>{
    const existe = await Rol.estimatedDocumentCount()

    if(!(existe>0)){
        return Promise.all([
            new Rol({nombre:"admin"}).save(),
            new Rol({nombre:"usuario"}).save(),
            new Rol({nombre:"visitante"}).save(),
        ])
    }
} 