const mongodb=require('mongoose');

mongodb.connect('mongodb://localhost:27017/bookDataBase');

let dataSchema=new mongodb.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type:String,
        required: true
    },
    year:{
        type:Number,
        required: true
    }
})

module.exports = mongodb.model('data',dataSchema);
