const express = require('express');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');


require('./models/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use(require('./routes/index'));



app.listen(PORT,(req,res)=>{
    console.log("Server Connected")
})

