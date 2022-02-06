const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require("cors");

io.on('connection', () => { console.log("New connection") });
server.listen(3000);


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`My Example app listening on port ${port}`)
})