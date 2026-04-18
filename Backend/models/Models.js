const connectDb = require('../config/db');

//to select brand models
const getModels = async (id) => {
    const connection = await connectDb();
    const [models] = await connection.execute('SELECT model_name FROM models WHERE brand_id = ?', [id]);
    await connection.end();
    return models;
};

//to select most popular models
const getTopModels = async () => {
    const connection = await connectDb();
    const [models] = await connection.execute('SELECT M.model_name, B.logo, M.clicks FROM models M INNER JOIN brands B ON M.brand_id = B.id WHERE M.clicks <> 0 ORDER BY M.clicks DESC LIMIT 3');
    await connection.end();
    return models;
};

module.exports = {getModels, getTopModels};