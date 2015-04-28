var http 		 = require('http');
var fs   		 = require('fs');
var riot 		 = require('riot');
var finalhandler = require('finalhandler');
var serveStatic  = require('serve-static');

var serve = serveStatic("./public");

var server = http.createServer(function(req, res) {

	var done = finalhandler(req, res);

	if (req.url === '/') {
		var html = fs.readFileSync("./public/index.html", "utf8");
		require("../public/list.tag");
		html = html.replace('<list></list>', riot.render('list'));
		console.log(html);
	    res.writeHead(200, {"Content-Type": "text/html"});
	    res.end(html);
	}

  	serve(req, res, done);
});

server.listen(8080);

console.log('Listening on port 8080.');

// Start an HTTP server
/*
http.createServer(function (request, response) {

	var html = fs.readFileSync("./public/index.html", "utf8");

	require("../public/list.tag");

	html = html.replace('<list></list>', riot.render('list'));
	//console.log(html);

    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(html);

}).listen(8080);
*/