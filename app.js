const express = require('express')
const app = express();
const path = require('path');
const fs = require('fs');
app.use(express.static(__dirname + '/source'));

const homefile = fs.readFileSync("./source/index.html","utf-8")

 app.listen(4001,()=>{
     console.log("server started")
 })

 app.get('/',(req,res)=>{
     res.send(homefile);
 });