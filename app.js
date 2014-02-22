var io = require('socket.io').listen(80);
var regUsers = [];


io.sockets.on('connection', function (socket) {
  socket.on('regUsers', function(data){socket.emit('users', {list: regUsers})})
  socket.on('registerUser', function(data){
    console.log(data);
  })
});

