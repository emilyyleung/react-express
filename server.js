const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api', function (req, res) {
  var data = {"hello":"whatup"};
 // return res.send('pong');
  return res.send(JSON.stringify(data));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, listening);

function listening() {
  console.log('server is listening...')
}
