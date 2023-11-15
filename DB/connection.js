const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb Atlas Successfully connected with pfServer");
    }).catch((err)=>{
    console.error(`Error connecting to Mongodb Atlas: ${err}`);

})