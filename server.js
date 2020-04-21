
const express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var blouse = require('./backend/models/blouses');
var bottomwear = require('./backend/models/bottomwear');
var tshirt = require('./backend/models/tshirt');
var bottoms = require('./backend/models/bottoms');
var jackets = require('./backend/models/jackets');
var menaccessories = require('./backend/models/menaccessories');
var womenaccessories = require('./backend/models/womenaccessories');
var shorts = require('./backend/models/shorts');
var traditionalwear = require('./backend/models/traditionalwear');

var Order = require('./backend/models/order');
//DB Connection
var dbOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, auto_reconnect: true };

mongoose.connect("mongodb+srv://Meghana_07:vnrvjiet@cluster0-lahh1.mongodb.net/Fashion?retryWrites=true&w=majority", dbOptions);

mongoose.connection.on('connected', function () {

    console.log("Connected to DB");

})

mongoose.connection.on('error', function (err) {

    console.log("Error while connecting to DB: " + err);

})
//DB Connection
const path = require('path')   //express contains path
const app = express()     //creating an obj for express
const port = process.env.PORT || 3000 //if 3000 there ok, if not it will take env port
// Body Parser 

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json

app.use(bodyParser.json())
app.use(cors());

// ** Body Parser ****

//serve static files
//dist -distributionng serve 
app.use(express.static(__dirname + '/dist/BFF'));
//send index.html from home(root) route


//backend routes
app.get('/api/blouse', (req, res) => {
  blouse.find({}, null, {
    limit: 20
  }, (err, docs) => {
    if (err) {
      console.log('Error while getting movies from DB in /api/blouse: ' + err);
      res.json({
        error: err
      });
    } else {
      res.json(docs);
    }
  });
})  
app.get('/api/bottomwear', (req, res) => {
  bottomwear.find({}, null, {
    limit: 20
  }, (err, docs) => {
    if (err) {
      console.log('Error while getting movies from DB in /api/bottomwear: ' + err);
      res.json({
        error: err
      });
    } else {
      res.json(docs);
    }
  });

})  
app.get('/api/tshirt', (req, res) => {
  tshirt.find({}, null, {
    limit: 20
  }, (err, docs) => {
    if (err) {
      console.log('Error while getting movies from DB in /api/tshirt: ' + err);
      res.json({
        error: err
      });
    } else {
      res.json(docs);
    }
  });

})  
app.get('/api/bottoms', (req, res) => {
  bottoms.find({}, null, {
    limit: 20
  }, (err, docs) => {
    if (err) {
      console.log('Error while getting movies from DB in /api/bottoms: ' + err);
      res.json({
        error: err
      });
    } else {
      res.json(docs);
    }
  });

})  
app.get('/api/jackets', (req, res) => {
  jackets.find({}, null, {
    limit: 20
  }, (err, docs) => {
    if (err) {
      console.log('Error while getting movies from DB in /api/jackets: ' + err);
      res.json({
        error: err
      });
    } else {
      res.json(docs);
    }
  });
})  
app.get('/api/menaccessories', (req, res) => {
  menaccessories.find({}, null, {
    limit: 20
  }, (err, docs) => {
    if (err) {
      console.log('Error while getting movies from DB in /api/menaccessories: ' + err);
      res.json({
        error: err
      });
    } else {
      res.json(docs);
    }
  });
})  
app.get('/api/womenaccessories', (req, res) => {
  womenaccessories.find({}, null, {
    limit: 20
  }, (err, docs) => {
    if (err) {
      console.log('Error while getting movies from DB in /api/womenaccessories: ' + err);
      res.json({
        error: err
      });
    } else {
      res.json(docs);
    }
  });
})  
app.get('/api/shorts', (req, res) => {
  shorts.find({}, null, {
    limit: 20
  }, (err, docs) => {
    if (err) {
      console.log('Error while getting movies from DB in /api/shorts: ' + err);
      res.json({
        error: err
      });
    } else {
      res.json(docs);
    }
  });
})  
app.get('/api/traditionalwear', (req, res) => {
  traditionalwear.find({}, null, {
    limit: 20
  }, (err, docs) => {
    if (err) {
      console.log('Error while getting movies from DB in /api/traditionalwear: ' + err);
      res.json({
        error: err
      });
    } else {
      res.json(docs);
    }
  });
})  
  // Store order at checkout in DB
app.post('/api/orders', (req, res) => {
  var ord = {
    "user": "Admin",
    "items": req.body
  }
  console.log(JSON.stringify(ord));
  var newOrder = new Order(ord);
  newOrder.save((err, doc) => {
    if (err) {
      console.log("Error occurred");
      res.json({
        "message": "error"
      });
    } else
      res.json(doc);
  })
})




// ******** Backend Routes *********

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
