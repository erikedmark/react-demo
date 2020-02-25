const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function (request, response) {

	var filePath = '.' + request.url;
	if (filePath == './')
		filePath = './index.html';

	const extname = path.extname(filePath);
	var contentType = 'text/html';

	if (extname === ".js") {
		contentType = 'application/javascript';
	}

	fs.readFile(filePath, function(error, content) {
		if (error) {
			if (error.code == 'ENOENT') {
				fs.readFile('./404.html', function(error, content) {
					response.writeHead(200, { 'Content-Type': contentType });
					response.end(content, 'utf-8');
				});
			} else {
				response.writeHead(500);
				response.end(error.code);
				response.end();
			}
		} else {
			response.writeHead(200, { 'Content-Type': contentType });
			response.end(content, 'utf-8');
		}
	});

}).listen(1337);

console.log('Server running at http://127.0.0.1:1337');