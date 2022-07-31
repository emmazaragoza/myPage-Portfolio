const { dbConnection } = require('./src/db/connection');
const http = require('./src/app');

require('dotenv').config();

dbConnection();


let port = process.env.SERVER_PORT
if(port == null || port == ""){
  port = 5000
}


http.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

