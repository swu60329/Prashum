var http = require('http');
var fs = require('fs');

var server =http.createServer(function(req,res){
  //html
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  var myReadStream = fs.createReadStream(__dirname + '/home.html','utf8');
  if (req.url === '/data.html') {
  var myReadStream = fs.createReadStream(__dirname + '/data.html','utf8');
  }
  if (req.url === '/news.html') {
    var myReadStream = fs.createReadStream(__dirname + '/news.html','utf8');
    }
    if (req.url === '/stay.html') {
      var myReadStream = fs.createReadStream(__dirname + '/stay.html','utf8');
      } 

  myReadStream.pipe(res);

  //css page1
  if (req.url === 'css/style.css') {
    res.writeHead(200, {'Content-type' : 'text/css'});
    var fileContents = fs.readFileSync('css/style.css', {encoding: 'utf8'});
    
    res.write(fileContents);
  }
  //css page2
  if (req.url === 'css/animate.css') {
    res.writeHead(200, {'Content-type' : 'text/css'});
    var fileContents = fs.readFileSync('css/animate.css', {encoding: 'utf8'});
    res.write(fileContents);
  }
  if (req.url === 'css/bootstrap.css') {
    res.writeHead(200, {'Content-type' : 'text/css'});
    var fileContents = fs.readFileSync('css/bootstrap.css', {encoding: 'utf8'});
    res.write(fileContents);
  }
  if (req.url === 'css/flexslider.css') {
    res.writeHead(200, {'Content-type' : 'text/css'});
    var fileContents = fs.readFileSync('css/flexslider.css', {encoding: 'utf8'});
    res.write(fileContents);
  }
  if (req.url === 'css/icomoon.css') {
    res.writeHead(200, {'Content-type' : 'text/css'});
    var fileContents = fs.readFileSync('css/icomoon.css', {encoding: 'utf8'});
    res.write(fileContents);
  }
  if (req.url === 'css/style2.css') {
    res.writeHead(200, {'Content-type' : 'text/css'});
    var fileContents = fs.readFileSync('css/style2.css', {encoding: 'utf8'});
    res.write(fileContents);
  }
  
  

});

server.listen(3000, '127.0.0.1');
console.log('now on port3000');
