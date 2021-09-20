const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/NUXTBLOGAPP',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(!err){
        console.log("Database Connected")
    }else{
        console.log("Error"+err);
    }
}

)

