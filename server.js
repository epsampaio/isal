var http = require('http');
var fs = require('fs');
var routing = require('./lib/js/mine/routing');

http.createServer( function(req,res) {
	var url = req.url;
	var f = null;
	if(url === '/') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		f = fs.readFileSync('pages/index.html',{'encoding': 'utf8'});
		res.end(f);
	} else {
		routing.rota(req,res);
	}
}).listen(1337,'127.0.0.1');