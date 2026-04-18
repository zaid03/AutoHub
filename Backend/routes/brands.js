const express = require('express');
const {getAllBrands, getPopularBrands} = require('../controllers/brandController');

const router = express.Router();

//to select brand models
router.get('/', getAllBrands);
//to select most popular brands
router.get('/top-brands', getPopularBrands);

module.exports = router;