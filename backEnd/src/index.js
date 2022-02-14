const app = require('express')();
const bodyParser = require('body-parser');
const leilaoRouter = require('./controllers/leilaoControllers');
const port = 3001;
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }
});

app.use(bodyParser.json());
app.use(require('cors')());
app.use('/leilao', leilaoRouter);
require('./sockets/leilao')(io);
app.get('/', (req, res) => res.send('Hello World!'))
http.listen(port, () => console.log(`Example app listening on port ${port}!`));