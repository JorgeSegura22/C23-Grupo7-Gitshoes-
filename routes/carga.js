const express = require('express');
const router = express.Router();
const cargaController = require("../controllers/cargaController")
/* GET home page. */
router.get('/',cargaController.carga);

module.exports = router;