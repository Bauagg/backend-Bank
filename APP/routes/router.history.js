const router = require('express').Router()

const contolerRiwayatTransaksi = require('../controler/controle.history')

const authorizationMIdelware = require('../../midelware/authenticated.')

router.get('/history', authorizationMIdelware, contolerRiwayatTransaksi.getRiwayatTransaksi)

module.exports = router