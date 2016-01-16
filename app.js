var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendfile('./index.html');
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
})
