const express = require('express');
const { GetAllusers,GetAllNonUsers,GetAllRegUsers } = require('../../controller/user/user');
const router = express.Router();

router.get('/allusers',GetAllusers);
router.get('/allnonuser',GetAllNonUsers);
router.get('/allreguser',GetAllRegUsers);

module.exports = router;