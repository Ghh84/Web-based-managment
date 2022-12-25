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
const getBalance = async (req,res) =>{
  console.log("came in balance controller...........");
  const values=[]
  for (const [key, value] of Object.entries(req.body)) {
    console.log(`${key}: ${value}`);
    values.push(value)
  }
  console.log( values)
  connection.query("SELECT USDbalance, localBalance from  balance where userId=?",[values[0]],(err,row)=>{
  if(err){
    console.log('error occured',err)
  }
  else{
    console.log('returned records')
    res.status(200).send(row)
  }
  
})
}
const updateBalance = (req, res) => {
  let columns=[],values=[]
  for (const [key, value] of Object.entries(req.body)) {
    console.log(`${key}: ${value}`);
    values.push(value)
  }
  console.log('values',values)
  connection.query("UPDATE  balance SET USDbalance=?,localBalance=?,adminUSD=?,adminLocal=?,comment=? where userId=?",
  [values[1],values[2],values[3],values[4],values[5],values[0]],(err,row)=>{
      if(err){
        console.log('error adding to transactions',err)
        res.status(400).send('Error updating the transaction')
      }
      else{
        console.log('returned records',row)
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
