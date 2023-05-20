const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.static(`${__dirname}/public`))

app.listen(4670, () => {
    console.log('server running on port 4670')
})