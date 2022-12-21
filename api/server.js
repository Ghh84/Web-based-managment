const express=require('express')
const mysql=require('mysql')
const cors = require("cors");
const port=process.env.PORT || 8080;
const app=express()
const bodyParser = require("body-parser");
app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("./routes/auth.routes")(app);
require("./routes/transaction.route")(app);
require("./routes/user.route")(app);
require("./routes/balanceRequest.route")(app);
 require("./routes/balance.route")(app);
/*require("./routes/transaction.route")(app);
require("./routes/user.route")(app); */
/*var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'demoDb',
    port:'3306'

})
connection.connect((err)=>{
    if(err){
        throw err
    }else {
        console.log('connected!')
    }
})
connection.query("INSERT INTO transactions(name,country,amount,reference,agent_id) VALUES ('Amanuel','canada','100','Elsa','1')",(err,rows)=>{
    if(err){
        throw err
    }else {
        console.log('data sent...')
        console.log(rows)
    }
}) */
/* connection.query("INSERT INTO agent(name,username,password,role) VALUES ('Amanuel','aloniab','aloni','1')",(err,rows)=>{
    if(err){
        throw err
    }else {
        console.log('data sent...')
        console.log(rows)
    }
}) */

app.listen(port)
console.log('App listening on port '+port)

