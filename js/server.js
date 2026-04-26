const http = require("http");
const server = http.createServer((req, res) => {
  res.write("Hello mohit server is running now");
  res.end();
});
server.listen(3000, () => {
    console.log("server running at https://localhost:3000/");
});
