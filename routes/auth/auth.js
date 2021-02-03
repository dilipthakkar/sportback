const express = require('express');
const { check } = require('express-validator');
const { AddUser, DeleteUser } = require('../../controller/auth/auth');
const router = express.Router();

router.post('/adduser' , [
    check('name').isLength({min : 1}).withMessage("Name is empty"),
    check('address').isLength({min:10}).withMessage("Address should be atleast 10 character long"),
    check('phone_no').isLength({min:10 , max: 10}).withMessage('invalid phone Number')
] ,AddUser);

router.delete('/deleteuser',DeleteUser);


module.exports = router;