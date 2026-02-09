const fs = require("fs");
fs.readFile = fs.readFileSync(".file.text", "utf-8", (data, err)=> {
console.log(data);
});


console.log("bye");