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

// Formulario para crear un producto
router.get('/cargaDeProducto',productsController.carga);
// Método para almacenar el producto creado 
router.post('/cargaDeProducto', upload.array("imagenes"), productsController.almacenar); 


router.get('/detalleDelProducto/:id', productsController.detalle);

// Formulario para edición de productos
router.get('/edicionDeProducto/:id',upload.array("imagenes"), productsController.edicion);
// Método para editar el producto
router.put('/edicionDeProducto/:id',upload.array("imagenes"), productsController.editar);


// vista para acceder a los metodos de edición, creación y eliminación de un producto
router.get('/dashboard', productsController.listarProductos);

// Método para eliminar un producto
router.delete('/delete/:id', productsController.eliminar);

router.get('/cart',productsController.carrito);

module.exports = router;
