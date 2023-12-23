const fs = require('fs');
const path = require('path');

const controller = {

registro: (req, res) => {
    res.render("register",{title:"Registro"});
    },

login:(req,res)=>{
    res.render("login")
}
}
module.exports = controller;