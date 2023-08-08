const router = require('express').Router()

const controlerRekening = require('../controler/controler.Rekening')

const authorizationMidelware = require('../../midelware/authenticated.')

router.get('/rekening', authorizationMidelware, controlerRekening.getRekening)
router.post('/rekening', authorizationMidelware, controlerRekening.createRekening)
router.put('/rekening/:id', authorizationMidelware, controlerRekening.updateRekening)
router.delete('/register/:id', authorizationMidelware, controlerRekening.deleteRekeningById)

module.exports = router

