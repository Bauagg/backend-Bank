const mongoose = require('mongoose')

const modelRiwayatTransaksi = mongoose.Schema({
    transaksi_ud: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaksi'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    tanggal_transaksi: {
        type: Date,
        required: [true, 'tanggal transaction harus di isi']
    }
})

const RiwayatTransaksi = mongoose.model('RiwayatTransaksi', modelRiwayatTransaksi)
module.exports = RiwayatTransaksi