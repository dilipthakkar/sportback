const express = require('express');
const { check } = require('express-validator');
const { deleteCategory, AddCategory, updateCategory } = require('../../controller/category/category');
const router = express.Router();


router.post('/addcategory' , [
    check('name').isLength({min : 1}).withMessage("name is empty")
],AddCategory);

router.put('/updatecategory' , [
    check('name').isLength({min : 1}).withMessage("name is empty")
],updateCategory);

router.delete('/deletecategory' , deleteCategory);

module.exports = router;