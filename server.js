var express = require('express');
var app = express();

app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'));

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});