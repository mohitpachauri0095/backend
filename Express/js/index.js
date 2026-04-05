const express = require('express');
const app = express();

app.get("/" , (req , resp)=>{
    resp.send("Hello Mohit Bhaii");
})
app.listen(6000, ()=>{
    console.log("Server running port on http://localhost:3000 ");
})      