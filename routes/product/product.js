const express = require('express');
const { check } = require('express-validator');
const { AddProducts, UpdateProduct, DeleteProduct, GetAllProducts } = require('../../controller/product/product');
const router = express.Router();
router.post('/addproduct',[
    check('name').isLength({min : 1}).withMessage("Name is empty"),
    check('price').isLength({min:1}).withMessage("price is empty"),
    check('category').isLength(1).withMessage('category is empty'),
],AddProducts);
router.put('/updateproduct',[
    check('name').isLength({min : 1}).withMessage("Name is empty"),
    check('price').isLength({min:1}).withMessage("price is empty"),
    check('category').isLength(1).withMessage('category is empty'),
    check('stock').isLength({min:1}).withMessage('stock is empty')
],UpdateProduct);
router.delete('/deleteproduct',DeleteProduct);
router.get('/allproducts',GetAllProducts);

module.exports = router;