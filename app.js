const express = require("express");// imports express

const app = express();

//middleware
app.use((req, res)=>{
    res.json({ message :'this is an express sserver'});
});

module.exports = app; //allows app to be imported to other files