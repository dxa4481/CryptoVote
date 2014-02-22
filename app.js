var io = require('socket.io').listen(80);
var regUsers = [];
var ursa = require('ursa')

io.sockets.on('connection', function (socket) {
  socket.on('regUsers', function(data){socket.emit('users', {list: regUsers})})
  socket.on('registerUser', function(data){
    regUsers.push(data.key);
    console.log("a user was registered!")
  })
  socket.on('vote', function(data){
    if(contains(regUsers,data.key)){
      var pub = ursa.createPublicKey(data.key, 'hex');
      if(pub.hashAndVerify('sha256', new Buffer(data.vote, 'utf8'), data.sig, 'hex'))
        {
          console.log(data.vote)
	}

    }    
  })
});



var contains = function(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}
