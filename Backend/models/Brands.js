const connectDb = require('../config/db');

//to select brand names
const getBrands = async () => {
    const connection = await connectDb();
    const [brands] = await connection.execute('SELECT id, name FROM brands');
    await connection.end();
    return brands;
};


module.exports = {getBrands};