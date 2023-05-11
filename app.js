const express = require('express');
 const app = express();
 app.set('view engine', 'ejs');

 app.listen(4003);

app.get('/',(req,res)=>{
    res.sendFile('./views/index.js', { root : __dirname });
    res.end()
})

app.get('/add-item',(req,res)=>{
    res.send('<h1>Add Item</h1>');
})

app.get('/', (req,res)=>{
    res.send("Hello")
})
