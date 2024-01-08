const fs = require('fs');
const path = require('path');

const { v4: uuidv4 } = require('uuid');
uuidv4();

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const getJson = () => {
	const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products;
}


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller= {


// formulario de carga de productos
carga: (req, res) => {
    res.render("producto/cargaDeProducto",{title:"carga"});
},

//modulo para procesar los datos del formulario y almacenarlos
almacenar: (req, res) => {
	const files = req.files
	const images = [];
	files.forEach(element => {
		images.push(element.filename);
	});
	const id = uuidv4();
	const {marca, modelo, color, talle, descripcion, genero, precio, descuento} = req.body;
	const products = getJson();
	const product = {
		id,
		marca: marca.trim(),
		modelo: modelo.trim(),
		color: color.trim(),
		talle,
		descripcion: descripcion.trim(),
		genero: genero,
		precio: +precio,
		descuento: +descuento,
		images: files ? images : ["default.jpg"],
	}
	products.push(product)
	const json = JSON.stringify(products);
	fs.writeFileSync(productsFilePath, json, "utf-8");
	// res.redirect(`/products/detail/${id}`); quitar commit cuando este lista la vista
},


carrito: (req, res) => {
    res.render("producto/cart",{title:"Carrito"});
},

dashboard: (req, res) => {
    res.render("producto/dashboard",{title:"dashboard"});
},

detalle: (req, res) => {
        const {id} = req.params;
		const products = getJson();
		const product = products.find(product => product.id == id)
		res.render("producto/detalleDelProducto",{title:"Detalle", product, toThousand});
    

},

edicion: (req, res) => {
    res.render("producto/edicionDeProducto",{title:"Edición"});
},

}

module.exports = controller;