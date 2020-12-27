const router = require('express').Router()
const {registrarUsuario} = require('../controllers/userControlller')

router.route('/registrarUsuario').post(registrarUsuario)
router.route('/').get()

module.exports = router