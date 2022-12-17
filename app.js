const express = require("express")
const cors = require('cors')

app = express()
app.use(express.json())
app.use(cors())

app.get("/",(req, res) => {
    res.send("dziala")
})

app.use('/api/v1/posts/',require('./api/postsApi'))

module.exports = app
