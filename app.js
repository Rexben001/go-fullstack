const express = require('express');// imports express

const app = express();

const Thing = require('./models/thing');

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
    });

//middlewares

//setting cors

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

    next();

}); //allows access to api in any platform

app.use(bodyParser.json()); // change request to json
//next line creates the post route that handles thing creation according to the frontend app created
app.post('/api/stuff', (req, res, next)=>{
    const thing = new Thing({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userId: req.body.userId
    }); //protoype for retrieving data sent with post api call

    thing.save().then(()=>{
        res.status(201).json({
            message: 'post saved successfully'
        })
    }).catch((error)=>{
        res.status(400).json({
            error: error
        });
    }); // saving data... and sending response if successfully saved
    next();
});

//get route(returns all things in the database)
app.use((req, res)=>{
   Thing.find().then((things)=>{
       res.status(200).json(things);
   }).catch((error)=>{
       res.status(400).json({
           error: error
       })
   })
});
app.use('/api/stuff', (req, res)=>{
    const stuff = ([
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
});



module.exports = app; //allows app to be imported to other files