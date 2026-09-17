//consilidar las rutas
const {Router} = require('express')
//importar enrutadores de las entidades
const pruebaRouter = require('./pruebaRouter')

const enrutador = Router()

//usar enrutador
enrutador.use("/rutaPrueba", pruebaRouter)

module.exports = enrutador
