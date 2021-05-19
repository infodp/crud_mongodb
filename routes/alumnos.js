const express = require('express')
const router = express.Router()

const alumnoController = require('../controllers/alumnoController')

//Mostrar todos los alumnos (GET)
router.get('/', alumnoController.mostrar)
//Crear alumno (POST)
router.post('/crear', alumnoController.crear)
//Editar alumno (POST)
router.post('/editar', alumnoController.editar)
//Borrar alumno (GET)
router.get('/borrar/:id', alumnoController.borrar)
module.exports = router