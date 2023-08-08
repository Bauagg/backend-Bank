const User = require('../models/models-user')

const bcrypt = require('../../utils/bcrypt')
const jwt = require('../../utils/jwt')

const register = async (req, res, next) => {
    try {
        const { username, email, password, role } = req.body

        const vailadteEmail = await User.exists({ email })
        if (vailadteEmail) return res.status(400).json({ message: 'Email sudah terdaftar' })

        const newUser = await User.create({
            username,
            email,
            password: await bcrypt.hashPassword(password),
            role
        })

        res.status(201).json({
            error: false,
            message: 'register success',
            datas: newUser
        })
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const newUser = await User.findOne({ email })
        if (!newUser) return res.status(401).json({ message: 'Invaild Email or Passwort' })

        const validationPassword = await bcrypt.validatePassword(password, newUser.password)
        if (!validationPassword) return res.status(401).json({ message: 'Invaild Email or Passwort' })

        const payloadToken = {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role
        }

        const jwtToken = jwt.createToken(payloadToken)
        res.status(201).json({
            error: false,
            message: 'login successfully',
            datas: {
                username: newUser.username,
                email: newUser.email,
                role: newUser.role,
                token: jwtToken
            }
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    register,
    login
}