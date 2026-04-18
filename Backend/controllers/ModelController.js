const {getModels, getTopModels} = require('../models/Models');

//to select brand models
const getAllModelsForBrand = async(req, res) => {
    try {
        const { id } = req.params;
        const models = await getModels(id);
        res.json({success: true, data: models});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
};

//to select most popular models
const getPopularModels = async(req, res) => {
    try {
        const models = await getTopModels();
        res.json({ success: true, data: models});
    } catch (error) {
        res.json(500).json({ succes: false, message: error.message});
    }
};

module.exports = {getAllModelsForBrand, getPopularModels};