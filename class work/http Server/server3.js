// const http = require("http")
// const { url } = require("inspector")

// // const server = http.createServer((req, res) => {
// //   if (req.url === "/") {
// //     res.end("Home Page");
// //   } else if (req.url === "/about") {
// //     res.end("About Page");
// //   } else {
// //     res.end("404 Not Found");
// //   }
// // });

// // server.listen(3000)
// let users = [];

// const user = {
//   name: "Mohit Pachauri",
//   age: 22,
//   isEmployed: false,
//   address: {
//     street: "oky oky fine ",
//     city: "Mathura"
//   },
//   phoneNumbers: ["123-456-7890", "987-654-3210"]
// }

// const server = http.createServer((req, res)=>{
//      if (req.method=="GET"&& req.url === "/") {
//       res.writeHead(200,{
//          "Content-Type": "application/json"
//       })
//       res.end(JSON.stringify(user))
//      }else{
//       res.writeHead(404, {
//       "Content-Type": "application/json"
//     });
//       res.end(JSON.stringify({ message: "Route Not Found" }));
//      }
// })

// // server.listen(3000,()=>{
// //   console.log("your server has been started");
  
// // })

// // POST DATA within server
// const server1 = http.createServer((req,res)=>{
//   if (req.method == "GET" && req.url==="/") {

//     res.writeHead(200,{
//       "content-type":"application/josn"
//     })
//     res.end(JSON.stringify(user))

//   }else if (req.method == "POST" && req.url === "/about") {

//     let body =""

//     res.on("data",chunk => {
//         body+=chunk.toString();
//     })

//     req.on("end", ()=>{
//         const newUser = JSON.parse(body)
//          users.push(newUser)

//          res.writeHead(201,{
//              "content-type":"application/json"
//          })
//          res.end(JSON.stringify({
//           message :" User fetch sucessfully",
//           user :"new User"
          
//          }))

//     })
//   }else{
//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "Route Not Found" }));
//   }
// })
// server1.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });