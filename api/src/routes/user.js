const router = require('express').Router()
// const {registrarUsuario,obtenerUsuarios,login} = require('../controllers/userControlller')
import  Usuario from '../controllers/userControlller'

router.route('/registrarUsuario').post(Usuario.registrarUsuario)
router.route('/').get(Usuario.obtenerUsuarios)
router.route('/login').post(Usuario.login)

module.exports = router