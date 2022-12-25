
const _=require('lodash')
const signin = (req, res) => {
const DbConnection=require('../db')
  console.log('REQUEST.......',req.body)
 
  var connection=DbConnection
  if(!connection._connectCalled ){
    connection.connect();
  }
  
  
};

const authenticateUser = async (req,res) =>{
  
    res.status(404).send({message:'message' || 'User not authenticated.'});
  
}
module.exports= {signin, authenticateUser}
   
