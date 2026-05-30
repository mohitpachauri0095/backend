const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("champions meraa mohiji or ");
})

app.get("/profile", function(req, res){
    res.send("champion uska tu ");
})

app.listen(3000); 