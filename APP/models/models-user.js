const mongoose = require('mongoose')

const modelUser = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username harus di isi'],
        maxlength: [250, 'max karakter adalah 250 karakter'],
    },
    email: {
        type: String,
        required: [true, 'email harus di isi'],
        validate: {
            validator: (value) => {
                const regexImail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/
                return regexImail.test(value)
            },
            message: (props) => `${props.value} email tidak valid`
        }
    },
    password: {
        type: String,
        required: [true, `password harus di isi`],
        maxlength: [250, 'max karakter adalah 250 karakter'],
        minlength: [3, 'min karakter adalah 3 karakter']
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        messagae: '{VALUE} is not suported',
        default: 'user'
    }
})

const User = mongoose.model('User', modelUser)
module.exports = User