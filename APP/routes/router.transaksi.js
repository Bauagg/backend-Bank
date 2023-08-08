const router = require('express').Router()

const controlerTransaksi = require('../controler/controler.Transaksi')

// midelware
const authorizationMidelware = require('../../midelware/authenticated.')

router.get('/transaksi', authorizationMidelware, controlerTransaksi.getTransaction)
router.post('/transaksi', authorizationMidelware, controlerTransaksi.createTransaction)

module.exports = router