const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

module.exports = {
    rootPath: path.resolve(__dirname, '..'),
    secretKey: process.env.SERVICE_KEY,
    serviceName: process.env.SERVICE_NAME,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    port: process.env.PORT
}