const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    return res.send('<h2>This is a home page</h2>');
});

app.get('/:echo', (req, res) => {
    return res.send(`<h1>${req.params.echo}!</h1>`);
});

app.listen(port, () => {
    console.log(`Server at: http://localhost:${port}`);
});