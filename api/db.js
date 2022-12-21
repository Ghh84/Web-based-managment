
const mysql=require('mysql')
const {host,user,password,database,port}=require('../src/configs/local')
console.log('DB CONNECTION........')
 const DbConnection=mysql.createConnection({host,user,password,database,port
        // host:'localhost',
        // user:'root',
        // password:'password',
        // database:'demoDb',
        // port:'3306'   
})
module.exports=DbConnection

