var http = require('http');
var fs   = require('fs');
var riot = require('riot');

// Start an HTTP server
http.createServer(function (request, response) {

	var html = fs.readFileSync("./public/index.html", "utf8");
	console.log(html);
	//require("../public/page.tag");

	if (request.url === '/bug/' || request.url === '/bug') {
		require("../public/bug/list.tag");
	} else {
		require("../public/list.tag");
	}

	html = html.replace('<list></list>', riot.render('list'));

    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(html);

}).listen(8080);