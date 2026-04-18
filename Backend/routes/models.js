const express = require('express');
const {getAllModelsForBrand, getPopularModels} = require('../controllers/ModelController');

const router = express.Router();

//to select most popular models
router.get('/top-models', getPopularModels);
//to select brand models
router.get('/:id', getAllModelsForBrand);

module.exports = router;