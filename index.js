const express = require('express');
const http = require('http');

//testing actions
const app = express();
const server = http.Server(app);
const PORT = 8080;
// const PORT = process.env.PORT || 8080;

app.use(express.static('client'));

server.listen(PORT, function() {
  console.log('Node Server up');
});

const io = require('socket.io')(server);

io.on('connection', function(socket) {
  socket.on('message', function(msg) {
    io.emit('message', msg);
  });
});
