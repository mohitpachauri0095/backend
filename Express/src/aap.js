const express = require('express');
const postRouter = require('./routes/postRoutes');

const app = express();

app.use(express.json());
app.use('/posts', postRouter);

app.get('/', (req, res) => {
    res.send('Hi from the server');
});

module.exports = app;
