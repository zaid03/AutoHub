const express = require('express');
const { getAllBrands } = require('../controllers/brandController');

const router = express.Router();

//to select brand models
router.get('/', getAllBrands);

module.exports = router;