require('./databases/database-mongoose')
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const cookeiParser = require('cookie-parser')

const config = require('./APP/config')

// midelware
const errorMidelware = require('./midelware/error.midelware')

// import router
const routerUser = require('./APP/routes/router.user')
const routerRekening = require('./APP/routes/router.Rekening')
const routerTransaksi = require('./APP/routes/router.transaksi')
const routerRiwayatTransaksi = require('./APP/routes/router.history')

const app = express()
const port = config.port || 4000

app.use(cors())
app.use(logger('dev'))
app.use(cookeiParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// router
app.use('/', routerUser)
app.use('/', routerRekening)
app.use('/', routerTransaksi)
app.use('/', routerRiwayatTransaksi)

app.use(errorMidelware)

app.listen(port, () => console.log('databas running 4000'))
