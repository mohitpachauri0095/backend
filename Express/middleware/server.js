const express = require('express');
const fs = require('fs');
const app = express();

app.use((req, res, next) => {
    const log = `request receved at ${req.url}
    method was ${req.method}
    at timestamp ${new Date().toISOString()}\n`;
    fs.appendFile('server.log', log, (err) => {
        if (err) {
            console.log('cannot log the request');
        }
        next();
    });
});
app.get('/', (req, res) => {
    console.log(req.)
