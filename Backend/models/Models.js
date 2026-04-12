const connectDb = require('../config/db');

//to select brand models
const getModels = async (id) => {
    const connection = await connectDb();
    const [models] = await connection.execute('SELECT model_name FROM models WHERE brand_id = ?', [id]);
    await connection.end();
    return models;
};


module.exports = {getModels};