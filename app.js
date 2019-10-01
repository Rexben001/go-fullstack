const express = require('express');// imports express

const app = express();

//middlewares

//setting cors

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

    next();

}); //allows access to api in any platform

app.use('/api/stuff', (req, res)=>{
    res.status(200).json([
        {
            _id: "thingid",
            title: "first thing",
            description: "description of first thing",
            imageUrl: "",
            price: 2900,
            userId: "Userid",
          },
          {
            _id: "thing2id",
            title: "secondthing",
            description: "descripton of second thing",
            imageUrl: "",
            price: 4900,
            userId: "Userid"
          }
        ]
    )
})



module.exports = app; //allows app to be imported to other files