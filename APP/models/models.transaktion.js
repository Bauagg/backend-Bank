const mongoose = require('mongoose')
const RiwayatTransaksi = require('./models.history')

const modelTransaction = mongoose.Schema({
    jenis_transaksi: {
        type: String,
        required: [true, 'transaksi harus di isi']
    },
    jumlah: {
        type: Number,
        required: [true, 'jumlah harus di isi']
    },
    tanggal: {
        type: Date,
        required: [true, 'tanggal harus di isi']
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    rekenigId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rekening',
        required: [true, 'rekening harus di isi']
    }
}, { timestamps: true })

modelTransaction.post('save', async function (doc) {

    const riwayat = new RiwayatTransaksi({
        transaksi_id: doc._id,
        user_id: doc._id,
        tanggal_transaksi: doc.tanggal
    })

    await riwayat.save()
})

const Transaksi = mongoose.model('Transaksi', modelTransaction)
module.exports = Transaksi

