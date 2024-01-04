const fs = require('fs');
const path = require('path');

const controller = {

registro: (req, res) => {
    res.render("usuario/register",{title:"Registro"});
    },

login:(req,res)=>{
    res.render("usuario/login")
}
}
module.exports = controller;