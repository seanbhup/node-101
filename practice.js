var http = require("http");
var fs = require("fs");

function homePage(req, res){
    res.writeHead(200, {"content-type":"text/html"});
    var home = fs.readFileSync("practice.html");
    res.end(home);
}

function bobPage(req, res){
    res.writeHead(200, {"content-type":"text/html"});
    var bob = fs.readFileSync("bob.html");
    res.end(bob);
}

function forbiddenPage(req, res){
    res.writeHead(403, {"content-type":"image/png"});
    var forbidden = fs.readFileSync("mrbase.png");
    res.end(forbidden);
}

function noApi(req, res){
    res.writeHead(400, {"content-type":"text/html"});
    res.end("<div>NO API KEY</div>");
}

var server = http.createServer((req, res)=>{

    // res.end("sanity");

    if(req.url === "/" ){
        homePage(req, res)
    }else if(req.url === "/bob"){
        bobPage(req, res)
    }else if(req.url === "/forbidden"){
        forbiddenPage(req, res)
    }else if(req.url === "/noApi"){
        noApi(req, res);
    }else{
        res.writeHead(404, {"content-type":"text/html"});
        res.end("404 BITCH");
    }

});

server.listen(8003);
console.log("SANTAS WATCHING YOU")
