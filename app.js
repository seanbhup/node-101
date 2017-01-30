
// Include the http module. It's part of the cor, so no npm install needed
var http = require("http");
// Include the fs module. FS = file syste. It is part of core.
var fs = require("fs");

function renderHomePage(request, response){
    response.writeHead(200, {"content-type":"text/html"});
    var theHomePageHTML = fs.readFileSync("homePage.html");
    response.end(theHomePageHTML);


    // The manual way without fs below
    // someone came to our home page. give the homepage content
    // response.write("<h1>This is the homepage.</h1>");
    // response.write("<p>garbage sentence</p>");
    // response.write("<p>still garbage</p>");
    // response.end();
}

// Set up an http server and store it in the server var
// The callback will run anytime someone hits the port that the server is listening to.
var server = http.createServer((request, response)=>{
    // this function is run everytime someone makes an HTTP request to this server
    console.log("Someone connected to our server");
    // The url requested is in the reqe object, url property
    console.log(request.url);



    if(request.url === "/"){
        renderHomePage(request, response);
        // cut and put in a function called renderHomePage
    }else if(request.url === "/mrbase.png"){
        var image = fs.readFileSync("mrbase.png");
        response.writeHead(200, {"content-type":"image/png"});
        response.end(image);
    }else{
        response.writeHead(404, {"content-type":"text/html"});
        response.end("the garbage you were looking for is at the dump");
    }

    // res.end will close the connection so the browser knows we are done
    response.end("I am Sean");
});

// Tell the server we created to listen to port 8001
// Whenever someone makes an HTTP request to this computer at port 8001, the callback will fire
server.listen(8001);
console.log("Server is listening for HTTP traffic at port 8001...")
