var http = require("http");

// console.log(http);

var server = http.createServer((req, res)=>{
    // console.log(req.rawHeaders[1]);

    res.writeHead(200, {"content-type": "text/html"});
    res.end("<img src='https://www.base64-image.de/build/img/mr-base64-482fa1f767.png'/><h1>Hello</h1>")
})


var port = 8000
console.log("Server listening on port " + port +  " for connections...")
server.listen(port);
