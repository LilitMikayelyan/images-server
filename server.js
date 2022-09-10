var http = require('http'),
    fs = require('fs'),
    url = require('url');
 
 
http.createServer(function (req, res) {
    var query = url.parse(req.url,true).query;
    var pic = query.image;
    fs.readFile('/Users/Dell/Desktop/web3/server/images/' + pic, function (err, content) {
        if (err) {
            res.writeHead(400, {'Content-type':'text/html'})
            console.log(err);
            res.end("No such image");    
        } else {
            res.writeHead(200,{'Content-type':'image/jpg'});
            res.end(content);
        }
    });
}).listen(3000);
console.log("Server running at http://localhost:3000/");