// console.log("A");
// console.log("B");   

// // for (let i = 0; i < 1000000000000; i++) {
// //   // Simulating a time-consuming task
// //   let a=1;
// // }    
// function sum(){         
// console.log("C");        
//     return 1+2;      
// }                                              
// setTimeout(sum, 5000); 
// // let ab = setInterval(sum, 1000);

// console.log("D");
// console.log("E");    


// const fs = require("fs");

// fs.writeFile("hie.text", "hello who are you brother", (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("done");
//   }
// });

const http = require ('http');
const server = createserver((req, res) => {
res.write("Hello mohit server is running now");
res.end();
});
server.listen(3000, () => {
    console.log("server running at https://localhost:3000/");
});
