const express = require('express');
const { getAllModelsForBrand } = require('../controllers/ModelController');

const router = express.Router();

//to select brand models
router.get('/:id', getAllModelsForBrand);

module.exports = router;