const http =require("http");
const server = http.createServer((req, res) => {
	const method = req.method;
	const urlObj =new URL(req.url,`http://${req.headers.host}`);
	const pathname = urlObj.pathname;
	const query = urlObj.searchParams;// GET with query params
	
    let body;
	if (method ==="GET" && pathname ==="/search") {
		const term = query.get("q");
		res.writeHead(200, {"Content-Type":"application/json" });
    res.end(JSON.stringify({message:"Search received",query: term}));
  } 
  
  // POST with body   
  
  else if (method ==="POST" && pathname ==="/data"){let body ="";
    req.on("data",(chunk) => {
      body += chunk;
    }); 
    req.on("end",() => {const parsed =JSON.parse(body);
      res.writeHead(201, {"Content-Type":"application/json" });
      res.end(JSON.stringify({message:"Data received",data: parsed,})
      );
    });
  }
  
  // fallback 
  else {
    res.writeHead(404, {"Content-Type":"text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000,() => {console.log("Server running on port 3000");
});