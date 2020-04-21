const express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors =require('cors');
var blouse=require('./backend/models/blouses');

// ************************ DB Connection ************************

var dbOptions = {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, auto_reconnect: true};

mongoose.connect("mongodb+srv://Meghana_07:vnrvjiet@cluster0-lahh1.mongodb.net/Fashion?retryWrites=true&w=majority", dbOptions);

mongoose.connection.on('connected', function(){

    console.log("Connected to DB");

})

mongoose.connection.on('error', function(err){

    console.log("Error while connecting to DB: " + err);

})

// ************************ DB Connection ************************







const app = express()

const port = process.env.PORT||3000;






// ****** Body Parser *******

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false })) 

// parse application/json
app.use(bodyParser.json())
app.use(cors());

// ****** Body Parser ********
app.use(express.static(__dirname+'/dist/BFF'))





// *********************** Backend Routes **********************

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/dist/BFF/index.html')))

app.get('/api/blouse',(req,res)=>{
    blouse.find({},null,{limit:6},(err,docs)=>
    {
        if(err)
        {
        res.json({error:err});
        console.log('Error while getting blouses from DB ');
        }
        else
        res.json(docs);
    })
})













// *********************** Backend Routes **********************









// ******************** Express Server *************************

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


