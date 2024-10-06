const express = require('express');
const server = express();
const port = process.env.PORT || 2000
require('./controller/db/conn');
const   user = require('./model/userSchema');

server.use(express.json());


server.post('/users', (req,res)=>{
       
    const userData= new user(req.body)
      
        userData.save().then(()=>{ 
            res.status(201).send(userData)
           }).catch((error)=>{
           res.status(400).send(error);
    })
       
});

server.get('/users', async (req,res)=>{
  
  const users = await user.find();
     
  res.send(users);

})

server.get('/users:id', async (req,res)=>{
        const _id= req.params.id;
      const users = await user.findById(_id);
         
      res.send(users);

});


server.delete('users/:id', async (req,res)=>{
      const _id = req.params.id;
      const users = await user.findByIdAndDelete(_id);

      res.send(users);

})




server.listen(port);




