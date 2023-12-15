const express = require('express');
const router = express.Router();
const carritoController = require("../controllers/carritocontroller")
/* GET home page. */
router.get('/',carritoController.carrito);

module.exports = router;