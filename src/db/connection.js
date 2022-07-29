const mongoose = require('mongoose');
require('dotenv').config();

const mongoConnectionUrl = process.env.URI;
console.log('DB connection MongoDB');
const dbConnection = async () => {
  try {
    return await mongoose.connect(mongoConnectionUrl, {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      socketTimeoutMS: 30000,
    })
      // eslint-disable-next-line no-unused-vars
      .then((dbConnPool) => {
        // eslint-disable-next-line no-console
        console.log('DB Online');
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Error connecting to mongo', err);
      });
  } catch (error) {
    throw new Error('Error a la hora de inicializar DB');
  }
};
module.exports = {
  dbConnection,
};
