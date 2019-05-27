require('dotenv').config()
//en ole varma pitääkö blogilistan olla 3003 vai ympäristömuuttujan (3001) mukaan
let PORT = 3003//process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI

module.exports = {
    MONGODB_URI,
    PORT
}