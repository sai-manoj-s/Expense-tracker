const mongoose = require('mongoose');


const Details = mongoose.Schema({
     date:{
         type: String,
         required:true

     },
     desc:{
        type: String,
        required:true

    },
    amount:{
        type: String,
        required:true

    }

})


const details=mongoose.model('exp',Details)
module.exports=details