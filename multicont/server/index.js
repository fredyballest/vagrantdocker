const socketIo = require("socket.io")
const http = require("http")
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express()
const server = http.createServer(app)
const io = socketIo(server)




app.use(cors());
app.use(bodyParser.json());

io.on('connection', socket => {
    console.log('cliente conectado')
    socket.emit('messageFromServer',{data:"Welcome to the socketio server"});
    
    socket.on('messageToServer',(dataFromClient)=>{
       console.log(dataFromClient)
   })
 })


app.get('/', (req, res) => {
    res.send('Hola Entrando');
  });

app.get('/otraurl', (req, res) => {
    res.send('Hola otra respuesta');
  });
  
server.listen(5000, err => {
    console.log('Listening');
  });