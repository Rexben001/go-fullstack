const express = require('express');// imports express

const app = express();

const mongoose = require('mongoose');

const bodyParser= require('body-parser');

//connecting to atlas

mongoose.connect('mongodb+srv://Ezekoconcept:jumokeade@cluster0-oxzps.mongodb.net/admin?retryWrites=true&w=majority')
    .then(()=>{
        console.log('connected to mongodb atlas successfully!');
    })
    .catch((error)=>{
        console.log({
            error: error
        });
    })

//middlewares

//setting cors

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

    next();

}); //allows access to api in any platform

app.use(bodyParser.json()); // change request to json

app.post('/api/stuff', (req, res)=>{
    console.log(req.body);
    res.status(201).json({
        message: "Thing Created!"
    });
    
});
/*
app.use((req, res)=>{
    res.status(201).json({message: 'thing created successfully'});

});
app.use('/api/stuff', (req, res)=>{
    res.json([
        {
            _id: "thingid",
            title: "first thing",
            description: "description of first thing",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Canon_EOS_60D_01.jpg",
            price: 2900,
            userId: "Userid"
          },
          {
            _id: "thing2id",
            title: "secondthing",
            description: "descripton of second thing",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Canon_EOS_60D_01.jpg",
            price: 9900,
            userId: "Userid"
          }
        ]
    )
})
*/


module.exports = app; //allows app to be imported to other files