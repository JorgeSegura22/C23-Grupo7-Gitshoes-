const fs = require('fs');
const path = require('path');

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
    res.render("detalleDelProducto",{title:"Detalle"});
},

edicion: (req, res) => {
    res.render("edicionDeProducto",{title:"Edición"});
},

}

module.exports = controller;