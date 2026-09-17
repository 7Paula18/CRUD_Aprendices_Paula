const {Router} = require('express')

const enrutador = Router()

enrutador.get("/", (req, res) => {
    res.json({mensaje: "ruta de prueba"})
})

module.exports = enrutador