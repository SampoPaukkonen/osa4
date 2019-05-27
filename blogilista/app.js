const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const blogsRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')

console.log('Yhdistetään osoitteeseen: ', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true})
    .then(() => {
        console.log('yhdistetty MongoDB:hen')
    })
    .catch(error => {
        console.log('virhe yhdistettäessä MongoDB:hen: ', error.message)
    })

app.use(express.static('build'))
app.use(bodyParser.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', blogsRouter)

app.use(middleware.unknownEndpoints)
app.use(middleware.errorHandler)

module.exports = app


