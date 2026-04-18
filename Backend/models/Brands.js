const connectDb = require('../config/db');

//to select brand names
const getBrands = async () => {
    const connection = await connectDb();
    const [brands] = await connection.execute('SELECT * FROM brands');
    await connection.end();
    return brands;
};

//to select most popular brands
const getTopBrands = async () => {
    const connection = await connectDb();
    const [brands] = await connection.execute("SELECT name, logo, clicks FROM brands WHERE clicks <> 0 ORDER BY clicks DESC LIMIT 3");
    await connection.end();
    return brands;
};

module.exports = {getBrands, getTopBrands};