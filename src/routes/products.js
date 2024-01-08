const express = require('express');
const router = express.Router();
const multer  = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,path.join(__dirname,"../","../public/images/products"))
},
    filename:(req, file, cb) => {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
}
})
const upload = multer({ storage })

const productsController = require("../controllers/productsController")

// Crear Producto
router.get('/cargaDeProducto',productsController.carga);
router.post('/cargaDeProducto', upload.array("imagenes"), productsController.almacenar); 



router.get('/cart',productsController.carrito);


router.get('/detalleDelProducto/:id', productsController.detalle);


router.get('/edicionDeProducto', productsController.edicion);


router.get('/dashboard', productsController.dashboard);

module.exports = router;
