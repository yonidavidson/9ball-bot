var express = require('express')
var router = express.Router()

router.use('/webhook', require('./webhook'))

module.exports = router