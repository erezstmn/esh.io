const express = require('express');
const randoKey = require('random-key');

const app = express();

app.get('/api_key', (req,res) => {
    res.send(randoKey.generate(10));
});

app.get('/',(req,res) =>{
    res.send('<h1>Hello world!</h1>');
});

app.listen(5000,() =>{
    console.log('App is running');
});