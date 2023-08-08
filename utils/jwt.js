const jwt = require('jsonwebtoken')
const config = require('../APP/config')


module.exports = {
    createToken: (token) => {
        return jwt.sign(token, config.secretKey)
    },
    varifyToken: (token) => {
        return jwt.verify(token, config.secretKey)
    }
}