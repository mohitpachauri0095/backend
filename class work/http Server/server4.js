const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  console.log(req.method);
  console.log(req.url);

  // GET request
  if (req.method === "GET" && req.url.startsWith("/user")) {

    const userObject = {
      name: "Mohit Pachauri",
      age: 21,
      address: "Mathura",
      course: "B.Tech Computer Science"
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(userObject));
  }
  

  else if (req.method === "POST" && req.url === "/user") {

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    }); 

    req.on("end", () => {
      fs.writeFile("data.txt", body, () => {
        res.writeHead(200);
        res.end("Done");
      }); 
    }); 
  }

  // 404
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }

});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
