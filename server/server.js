var express=require('express');
var index=require('./routes/index.js');
var app=express();
var bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(express.static('server/public'));
//////routers/////////
app.use('/', index);


var server=app.listen(3000, function(){
  var port = server.address().port;
    console.log('Listening on port: ', port);
});
