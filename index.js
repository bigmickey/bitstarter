var express = require('express')
var app = express()

fs = require('fs')

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var indexhtmlbuf = fs.readFileSync('/home/ubuntu/hw3/bitstarter/index.html')

app.get('/', function(request, response) {
  response.send(indexhtmlbuf.toString())
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
