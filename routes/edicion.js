const express = require('express');
const router = express.Router();
const edicionController = require("../controllers/edicionController")
/* GET home page. */
router.get('/', edicionController.edicion);

module.exports = router;
