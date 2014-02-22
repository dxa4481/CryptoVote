var io = require('socket.io-client')
socket = io.connect('http://localhost:80');

socket.on('connect', function(){
  socket.emit('registerUser', {bla: "Hello"});


})
