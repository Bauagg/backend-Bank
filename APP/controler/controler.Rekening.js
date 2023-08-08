const Rekening = require('../models/models-Rekening')

const getRekening = async (req, res, next) => {
    try {
        const newRekening = await Rekening.find({ user: req.user.id }).populate('user', 'username email role')

        res.status(200).json({
            error: false,
            message: 'lihat data rekening success',
            datas: newRekening
        })
    } catch (error) {
        next(error)
    }
}

// fungction untuk membuat no random 10 digit
const generetRandomNumber = (number) => {
    const digits = '0123456789'
    let resoult = ''

    for (let i = 0; i < number; i++) {
        resoult += digits[Math.floor(Math.random() * digits.length)]
    }

    return resoult
}

const createRekening = async (req, res, next) => {
    try {
        const noRekeningRandom = generetRandomNumber(10)

        const newRekening = await Rekening.create({
            no_rekening: parseInt(noRekeningRandom),
            saldo: req.body.saldo,
            user: req.user.id,
            tanggal_pembuatan: new Date()
        })

        res.status(201).json({
            error: false,
            message: 'create data Rekening success',
            datas: newRekening
        })
    } catch (error) {
        next(error)
    }
}

const updateRekening = async (req, res, next) => {
    try {
        const newRekening = await Rekening.updateOne({ _id: req.params.id, user: req.user.id }, { saldo: req.body.saldo })
        if (newRekening.modifiedCount === 1) {
            return res.status(201).json({
                error: false,
                message: 'data berhasil di update',
                datas: newRekening
            })
        } else {
            return res.status(200).json({ message: 'data is not update' })
        }

    } catch (error) {
        next(error)
    }
}

const deleteRekeningById = async (req, res, next) => {
    try {
        const newRekening = await Rekening.deleteOne({ _id: req.params.id }, { user: req.user.id })
        if (!newRekening) return res.status(404).json({ message: 'data not found' })

        res.status(200).json({
            error: false,
            message: 'delete data successfully'
        })

    } catch (error) {
        next(error)
    }
}

module.exports = {
    getRekening,
    createRekening,
    updateRekening,
    deleteRekeningById
}