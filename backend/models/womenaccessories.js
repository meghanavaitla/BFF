var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var womenaccessoriesSchema = new Schema({

    name: String,
    front: String,
    back: String,
    price: Number,
    size: []
}
);
var womenaccessories = mongoose.model('womenaccessories', womenaccessoriesSchema, 'womenaccessories');
module.exports = womenaccessories;