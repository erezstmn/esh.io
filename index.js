const express = require('express');
const randoKey = require('random-key');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, './client/build')));

app.post('/api_key', (req,res) => {
    res.send(randoKey.generate(10));
});

app.get('/',(req,res) =>{
    res.send('<h1>Hello world!</h1>');
});

app.listen(5000,() =>{
    console.log('App is running');
});