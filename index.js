const express = require('express');

const app = express();
const port = 8000;

const Vigenere = require('caesar-salad').Vigenere;
const password = 'password';

app.get('/', (req, res) => {
    return res.send('<h2>This is a home page</h2>');
});

app.get('/:echo', (req, res) => {
    return res.send(`<h1>${req.params.echo}</h1>`);
});

app.get('/encode/:text', (req, res) => {
    const text = req.params.text;
    const encodedText = Vigenere.Cipher(password).crypt(text);
    return res.send(encodedText);
});

app.get('/decode/:text', (req, res) => {
    const text = req.params.text;
    const decodedText = Vigenere.Decipher(password).crypt(text);
    return res.send(decodedText);
});

app.listen(port, () => {
    console.log(`Server at: http://localhost:${port}`);
});