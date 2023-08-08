const RiwayatTransaksi = require('../models/models.history')

const getRiwayatTransaksi = async (req, res, next) => {
    try {
        const newRiwayatTransaksi = await RiwayatTransaksi.find({ user: req.user._id })

        res.status(200).json({
            error: false,
            message: 'data successfully',
            datas: newRiwayatTransaksi
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { getRiwayatTransaksi }