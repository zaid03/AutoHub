const {getBrands, getTopBrands} = require('../models/Brands');

//to select brand names
const getAllBrands = async (req, res) => {
    try {
        const brands = await getBrands();
        res.json({ success: true, data: brands});
    } catch (error) {
        res.error(500).json({ success: false, message: error.message});
    }
};

//to select most popular brands
const getPopularBrands = async(req, res) => {
    try {
        const brands = await getTopBrands();
        res.json({ success: true, data: brands});
    } catch (error) {
        res.error(500).json({ success: false, message: error.message});
    }
};

module.exports = {getAllBrands, getPopularBrands};