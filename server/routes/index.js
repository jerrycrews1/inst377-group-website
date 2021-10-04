const express = require('express')
const path = require('path')
__dirname = path.resolve()

const router = express.Router()

router.get('/', (req, res) => {
    // shows the home index.html
    res.sendFile(`${__dirname}/client/home/index.html`)
})

module.exports = router
