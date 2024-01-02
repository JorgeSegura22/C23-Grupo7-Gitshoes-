const fs = require('fs');
const path = require('path');

const { v4: uuidv4 } = require('uuid');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const getJson = () => {
	const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products;
}


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller= {

carga: (req, res) => {
    res.render("cargaDeProducto",{title:"carga"});
},

carrito: (req, res) => {
    res.render("cart",{title:"Carrito"});
},

dashboard: (req, res) => {
    res.render("dashboard",{title:"dashboard"});
},

detalle: (req, res) => {
        const {id} = req.params;
		const products = getJson();
		const product = products.find(product => product.id == id)
		res.render("detalleDelProducto",{title:"Detalle", product, toThousand});
    

},

edicion: (req, res) => {
    res.render("edicionDeProducto",{title:"Edición"});
},

}

module.exports = controller;