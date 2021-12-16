const express = require('express')
const path = require('path')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

require('./db').connect(() => app.listen(3000))
