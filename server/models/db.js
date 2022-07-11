const mongoose = require('mongoose');
try {
    (async ()=>{
        await mongoose.connect('mongodb+srv://Admin:admin@cluster0.pwyqm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
        
    })();
}catch(err){
    console.log(err);
}


module.exports = mongoose;