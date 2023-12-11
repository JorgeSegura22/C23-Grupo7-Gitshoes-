const express = require('express');
const router = express.Router();
const detalleDelProductoController = require("../controllers/detalleDelProductoController")
/* GET home page. */
router.get('/', detalleDelProductoController.detalle);

module.exports = router;
