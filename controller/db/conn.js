const mongoose = require('mongoose');



function dbConnection(){
       mongoose.connect('mongodb://localhost:27017/userDatabase').then(()=>{
             console.log("Database is Connected Sucessfully");
       }).catch((error)=>{
             console.log(error);
       })
}


dbConnection();

