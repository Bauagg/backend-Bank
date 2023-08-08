const jwt = require('../utils/jwt')
const { getToken } = require('../utils/getToken')

module.exports = (req, res, next) => {
    try {
        const token = getToken(req)
        if (!token) return res.status(400).json({ message: 'authentication failed' })

        const validationToken = jwt.varifyToken(token)
        if (!validationToken) return res.status(400).json({ message: 'authentication failed' })

        req.user = validationToken
        next()
    } catch (error) {
        next(error)
    }
}