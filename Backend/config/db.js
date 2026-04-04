const mysql = require('mysql2/promise');

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection(process.env.MYSQL_URI);
    console.log('✅ Mysql connected successfully');
    return connection;
  } catch (error) {
    console.error('❌ Mysql connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;