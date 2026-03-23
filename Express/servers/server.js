const express = require('express');
const app = express();

app.get('/sum', (req, res) => {
    console.log(req.query);
    const ans =  parseInt(req.query.a) + parseInt(req.query.b);
    res.send(ans.toString());
});

app.get ("/sum",)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});