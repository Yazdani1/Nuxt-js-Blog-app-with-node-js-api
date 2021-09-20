const mongoose = require('mongoose');


var blogSchema = mongoose.Schema({

    title:{
        type: String
    },
    des:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("BlogPost",blogSchema);
