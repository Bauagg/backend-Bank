const Transaksi = require('../models/models.transaktion')

const getTransaction = async (req, res, next) => {
    try {
        const newTransaction = await Transaksi.find({ user: req.user._id })
            .populate('rekenigId', '_id no_rekening saldo')
            .populate('user_id', '_id username email role')

        res.status(200).json({
            error: false,
            message: 'data berhasil di tampilkan',
            datas: newTransaction
        })
    } catch (error) {
        next(error)
    }
}

const createTransaction = async (req, res, next) => {
    try {
        const { jenis_transaksi, jumlah, rekenigId } = req.body
        const newTransaction = await Transaksi.create({
            jenis_transaksi,
            jumlah,
            tanggal: new Date(),
            user_id: req.user.id,
            rekenigId
        })

        res.status(201).json({
            error: false,
            message: 'create data succesfully',
            datas: newTransaction
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getTransaction,
    createTransaction
}