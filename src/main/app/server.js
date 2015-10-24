var express = require('express');
var app = express();

app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'));

app.get('/:partial.html', function (req, res) {
    'use strict';
    res.render(req.params.partial);
});

var server = app.listen(3000, function () {
    'use strict';
    console.log('Listening on port %d', server.address().port);
});