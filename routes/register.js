const express=require("express")
const router=express.Router()
const registerController=require("../controllers/registerController");

/* GET register page. */
router.get('/', registerController.registro);

module.exports = router;
