const express = require('express')
const leilaoRouter = require('./controllers/leilaoControllers')
const app = express()
const port = 3001

app.use(express.json());

app.use('/leilao', leilaoRouter);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))