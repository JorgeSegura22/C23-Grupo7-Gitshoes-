const express = require('express');
const router = express.Router();

const productsController = require("../controllers/productsController")

router.get('/cargaDeProducto',productsController.carga);


router.get('/cart',productsController.carrito);


router.get('/detalleDelProducto', productsController.detalle);


router.get('/edicionDeProducto', productsController.edicion);


router.get('/dashboard', productsController.dashboard);

module.exports = router;
