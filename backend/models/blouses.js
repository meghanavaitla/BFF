var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var blousesSchema=new Schema({
    name: String,
    front: String,
    back: String,
    price: String,
        size:[]
}
);
var blouse=mongoose.model('blouse',blousesSchema,'blouse');
module.exports=blouse;