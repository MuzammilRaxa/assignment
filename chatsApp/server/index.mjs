

import express from 'express';
const app = express()
app.use(express.json())
import socketIo from 'socket.io';

// const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => {  console.log("New connection") });
server.listen(3000);



// import cors from 'cors';
// import path from 'path';

// const __dirname = path.resolve();

// app.use(cors());

// const server=http.createServer(app);

// const io = socketIo(server);

// io.on( "connection" ,()=> {
//   console.log("New connection")
// })

app.get('/', (req, res) => {
    res.send('Im Express.js server!')
  })

  const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})

