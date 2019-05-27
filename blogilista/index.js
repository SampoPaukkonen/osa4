//Jos tulee porttien kanssa ongelmia, niin muista että frontend saattaa olla portissa 3000 ja backend portissa 3003

const app = require('./app')
const http = require('http')
const config = require('./utils/config')

const server = http.createServer(app)

server.listen(config.PORT, () => {
    console.log(`Serveri pyörii portissa ${config.PORT}`)
})


/*
require('dotenv').config()
const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
//Tähän alle tulee moduuleihin eritytetyt osat
const config = require('./utils/config')



const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

const mongoURL = config.MONGODB_URI//process.env.MONGODB_URI
mongoose.connect(mongoURL, {useNewUrlParser: true})

app.use(cors())
app.use(bodyParser.json())

app.get('/', (request, response) => {
    const answer = '<h1>Hello, World!</h1>'
    response.send(answer)
})

app.get('/api/blogs', (request, response) => {
    Blog 
        .find({})
        .then(blogs => {
            response.json(blogs)
        })
})

app.post('/api/blogs', (request, response) => {
    const blog = new Blog(request.body)
    console.log("Uusi blogi on: ", blog)
    console.log("Uuden blogin sisältö on: ", request.body)
    blog
        .save()
        .then(result => {
            response.status(201).json(result)
        })
})

const PORT = config.PORT//3003//process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
*/