'use strict';

const http = require('http');
const path = require ('path');

const express = require('express');

const app = express();

const port = process.env.PORT || 3000


const palvelin = http.createServer(app);

const lomakepolku = path.join(__dirname,'lomake.html');

app.get('/', (req,res)=>res.sendFile(lomakepolku));
app.post('/',express.urlencoded({extended:false}), (req,res)=>res.json(req.body));



palvelin.listen(port, ()=>console.log(`kuuntelee: ${port}`));
