const {getModels} = require('../models/Models');

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

module.exports = { getAllModelsForBrand };