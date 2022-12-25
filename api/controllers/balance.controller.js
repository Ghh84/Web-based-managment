const { values } = require('lodash');
const _=require('lodash')
const DbConnection=require('../db')
var connection=DbConnection
const sql="SELECT * from  balance"

const getBalances = async (req, res) => {
  console.log("came in balance controller...........");
  connection.query(sql,(err,row)=>{
  if(err){
    console.log('error occured',err)
  }
  else{
    console.log('returned records')
    res.status(200).send(row)
  }
})
};

module.exports= {
  updateBalance,
  getBalance,
  getBalances,
  addBalance,
  deleteBalance,
  updateBalanceFromRequest
};
