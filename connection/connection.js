const mongoose = require('mongoose')

 const connectionDB = async()=>{
    try{
        mongoose.connect(process.env.MONGODB_URL)
        console.log("connection success with mongoDB ... ");
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports = connectionDB