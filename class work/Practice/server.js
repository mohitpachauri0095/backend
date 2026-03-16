const http = require("http");

const server = http.createServer(function(req, res) {
     
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Server is running successfully");
});

server.listen(4000, function() {
    console.log("Server running at http://localhost:4000");
});