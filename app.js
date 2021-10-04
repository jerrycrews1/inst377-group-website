const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const allRoutes = require('./server/routes')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
const staticFolder = 'client'
const routes = app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
app.use(express.static(staticFolder))
app.use('/', allRoutes)

async function startServer() {
    try {
        app.listen(PORT, () => {
            console.log(`listening on http://localhost:${PORT}`)
        })
    } catch (err) {
        console.warn(err)
    }
}
startServer()
