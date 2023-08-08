const mongoose = require('mongoose')

const modelRekening = mongoose.Schema({
    no_rekening: {
        type: Number,
        required: [true, 'no Rekenin harus di isi'],
        min: [10, 'min karakter adalah 10 karakter']
    },
    saldo: {
        type: Number,
        required: [true, 'saldo harus di isi'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    tanggal_pembuatan: {
        type: Date,
        required: [true, 'tanggal transaksi harus di isi']
    }
}, { timestamps: true })

const Rekenin = mongoose.model('Rekening', modelRekening)
module.exports = Rekenin