const express = require("express");
const router = express.Router();
const product = require(`../controller/productController`);
const formidable = require("express-formidable");
const  { authenticatedUser } = require("../middleware");


router.post(`/create-product`, authenticatedUser, formidable(), product);
 
module.exports = router;