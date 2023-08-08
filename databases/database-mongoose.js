const mongoose = require('mongoose')

const { dbPort, dbHost, dbName } = require('../APP/config')

mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.on('open', () => console.log('mongoose connected'))
