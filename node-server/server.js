const express = require('express')
const cors = require('cors')
const request = require('request')

const app = express()
const PORT = process.env.PORT || 3300;
const corsOptions = {
    origin: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(express.json({ limit: '1000mb' }));
app.use(express.urlencoded({ limit: '1000mb' }));

app.route('/').get((req, res) => {
res.send('Welcome').status(200)
})

app.listen(PORT, () => {
    console.log('Server running on PORT : ', PORT)
})