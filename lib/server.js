var http = require('http');
var fs   = require('fs');
var riot = require('riot');

// Start an HTTP server
http.createServer(function (request, response) {

	var html = fs.readFileSync("./public/index.html", "utf8");

	require("../public/page.tag");
	require("../public/list.tag");

	html = html.replace('<page></page>', riot.render('page'));

    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(html);

}).listen(8080);