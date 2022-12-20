import { useEffect, useState } from "react";
import Joi from 'joi-browser'
import { Button, Alert } from "react-bootstrap";
import TransactionService from '../../services/transaction.service';
import UserService from '../../services/user.service';
import AuthService from '../../services/auth.service'
// import Country from "../common/country";
import Input from "../common/input";
import configs from '../../configs/local'
// import CurrencySelect from "../1 not used/currency";

const Edit=({handlePageSwitch,selectedTxn})=>{
    console.log('selected transaction.........',selectedTxn)
      const [sName,setsName]=useState(selectedTxn.sName)
      const [sCity,setsCity]=useState(selectedTxn.sCity)
      const [sAmount,setsAmount]=useState(selectedTxn.sAmount)
      const [sCountry,setsCountry]=useState(selectedTxn.sCountry)
      const [sCurrency,setsCurrency]=useState(selectedTxn.sCurrency)
      const [sPhone,setsPhone]=useState(selectedTxn.sPhone)
      const [sEmail,setsEmail]=useState(selectedTxn.sEmail)
      const [sPlacehold,setsPlaceholder]=useState(selectedTxn.sPlacehold)
      const [rName,setrName]=useState(selectedTxn.rName)
      const [rCity,setrCity]=useState(selectedTxn.rCity)
      const [rAmount,setrAmount]=useState(selectedTxn.rAmount)
      const [rCountry,setrCountry]=useState(selectedTxn.rCountry)
      const [rCurrency,setrCurrency]=useState(selectedTxn.rCurrency)
      const [rPhone,setrPhone]=useState(selectedTxn.rPhone)
      const [rEmail,setrEmail]=useState(selectedTxn.rEmail)
      const [userId,setUserId]=useState(selectedTxn.userId)
      const [referenceP,setReference]=useState(selectedTxn.referenceP)
      const [ticketNo,setTicketNo]=useState(selectedTxn.ticketNo)
      const [users,setUsers]=useState([])
      const [Message,setMessage]=useState('')
      const [errored,setErrored]=useState('')
      const [status,setStatus]=useState(selectedTxn.status)
      const [comment,setComment]=useState(selectedTxn.comment)
      const [initialStatus,setInitialStatus]=useState(selectedTxn.status)

      function handleEdit(){
        const editObject={
            sName:sName,
            sCity:sCity,
            sAmount:sAmount,
            sCountry:sCountry,
            sCurrency:sCurrency,
            sPhone:sPhone,
            sEmail:sEmail,
            rName:rName,
            rCity:rCity,
            rAmount:rAmount,
            rCountry:rCountry,
            rCurrency:rCurrency,
            rPhone:rPhone,
            rEmail:rEmail,
            userId:userId,
            referenceP:referenceP,
            status:status,
            comment:comment,
            ticketNo:ticketNo
        }
        // set validation Schema
        const schema = {
            userId: Joi.string(),
            sName: Joi.string()
              .required()
              .label("Name"),
            sCity: Joi.string()
              .required()
              .label("City"),
            sAmount: Joi.string()
              .required()
              .label("Amount"),
            sCountry: Joi.string()
              .required()
              .label("Country"),
              sName: Joi.string()
              .required()
              .label("Name"),
            sCurrency: Joi.string()
              .required()
              .label("Currency"),
            sPhone: Joi.number()
              .required()
              .min(0)
              .max(100)
              .label("Phone"),
            sEmail:Joi.string().email(),
            sName: Joi.string()
              .required()
              .label("Name"),
            sCity: Joi.string()
              .required()
              .label("City"),
            sAmount: Joi.string()
              .required()
              .label("Amount"),
            sCountry: Joi.string()
              .required()
              .label("Country"),
            rName: Joi.string()
              .required()
              .label("Name"),
            rCurrency: Joi.string()
              .required()
              .label("Currency"),
            rPhone: Joi.number()
              .required()
              .min(0)
              .max(100)
              .label("Phone"),
            rEmail:Joi.string().email(),

            username: Joi.string()
            .required()
            .label("Username"),
          password: Joi.string()
            .required()
            .label("Password")
          };
        
        //validate data before sending
        
        TransactionService.editTransaction(editObject).then((res)=>{
            alert(editObject.sAmount)
            //update user balance
            let updatedBalance=0
            let currentUser=users.filter(u=>u.id==userId)
            console.log('........',userId,currentUser,!!currentUser?currentUser[0].balance:0, rAmount)
            if(status!=initialStatus && status=='Paid') updatedBalance=!!currentUser?parseFloat(currentUser[0].balance) - parseFloat(rAmount):0
            else if(status!=initialStatus && status=='NotPaid' && initialStatus=='Paid')  updatedBalance=!!currentUser?parseFloat(currentUser[0].balance) + parseFloat(rAmount):0
           if(updatedBalance!=0) { 
            console.log('updated amount...',updatedBalance)
            const balanceObj={
            balance:updatedBalance,
            userId:userId
            }
            UserService.updateUser(balanceObj).then((res)=>{
                console.log('balance updated successfully.......',res.data)
            }).catch((err)=>{
    
            }) 
        }
            setMessage('Transaction was successfully updated')
                setErrored('')
           
        }).catch((err)=>{
            setMessage('')
            setErrored('Transaction update failed')
        })
      }
      useEffect(()=>{
        UserService.getUsers().then((res)=>{
            console.log('response from users',res.data)
            setUsers(res.data)
        })
      },[])
return(
    <div className="addTransaction">
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
    <div className="wrapper wrapper--w680">
        <div className="card card-4">
            {AuthService.getCurrentUser().role==1?
            (<div className="card-body">
                <div className="edit-top">         
                <h2 className="title">Edit Transaction</h2>
                <hr style={{backgroundColor:'gray',height:'2px'}}/>
                <h4 style={{color:'blue'}}>Ticket No:{ticketNo}</h4>
                </div>
                {Message &&
                            <Alert variant='success'>{Message}</Alert>}
                {errored &&
                            <Alert variant='danger'>{errored}</Alert>}
                            <hr style={{backgroundColor:'gray',height:'2px'}}/>
                <form method="POST">
                <h4 className="sub-title"> Sender Details:</h4>
                    <div className="row row-space">
                        <Input name={sName} label="Name" required="required" setUsername={setsName} error="" value={sName}  classN='col-2'/>
                        <Input name={sCity} label="City" required="required" setUsername={setsCity} error="" value={sCity} classN='col-2'/>
                        <Input name='sPhone' label="Phone" required="required" setUsername={setsPhone} error="" value={sPhone} classN='col-2'/>
                        <Input name={sAmount} label="Amount" required="required" setUsername={setsAmount} error="" value={sAmount} classN='col-2'/>
                    </div>
                    <div className="row row-space">
                        <div className="col-2">
                            <div className="input-group">
                                <label className="label">Country</label>
                                <div className="input-group-icon">                         
                                <select class="form-control selectpicker"  onChange={(e)=>setrCountry(e.target.value)}>
                                <option disabled="disabled" selected="selected">Country</option>
                                {configs.countries.map((c,index)=>{
                                    return <option value={c}>{c}</option>
                                })}
                            </select>  
                                </div>
                            </div>
                        </div>
                        <Input name={sEmail} label="Email" required="" setUsername={setsEmail} error="" value={sEmail} classN='col-2'/>  
                        <div className="col-2">
                            <div className="input-group">
                            <label className="label">Currency</label>
                            <div className="input-group-icon"> 
                            <select class="form-control selectpicker"  onChange={(e)=>setsCurrency(e.target.value)}>
                                <option disabled="disabled" selected="selected">Currency</option>
                                {configs.currencies.map((c,index)=>{
                                    return <option value={c}>{c}</option>
                                })}
                            </select> 
                            </div>
                            </div>
                        </div>
                        {/* <div className="col-2">
                        <div className="input-group">
                        <label className="label">Placeholder</label>
                                <div className="input-group-icon">
                                    <input className="input--style-4 js-datepicker" type="text" name="birthday"/>
                                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                </div> 
                        </div>
                        </div> */}
                        <Input name={sPlacehold} label="Placehold" required="" setUsername={setsPlaceholder} error="" value={sPlacehold} classN='col-2'/>

                        
                    </div>
                    <hr style={{backgroundColor:'gray',height:'2px'}}/>
                    <h4 className="sub-title">Receiver Details:</h4>
                    <div className="row row-space">
                        <Input name={rName} label="Name" required="required" setUsername={setrName} error="" value={rName} classN='col-2'/>
                        <Input name={rCity} label="City" required="required" setUsername={setrCity} error="" value={rCity} classN='col-2'/>
                        <Input name={rPhone} label="Phone" required="required" setUsername={setrPhone} error="" value={rPhone} classN='col-2'/>
                        <Input name={rAmount} label="Amount" required="required" setUsername={setrAmount} error="" value={rAmount} classN='col-2'/>
                    </div>
                    <div className="row row-space">
                        <div className="col-2">
                            <div className="input-group">
                                <label className="label">Country</label>
                                <div className="input-group-icon">                        
                                <select class="form-control selectpicker"  onChange={(e)=>setrCountry(e.target.value)}>
                                <option disabled="disabled" selected="selected">Country</option>
                                {configs.countries.map((c,index)=>{
                                    return <option value={c}>{c}</option>
                                })}
                            </select>  
                                
                            </div>
                        </div>
                        </div>
                        <Input name={rEmail} label="Email" required="" setUsername={setrEmail} error="" value={rEmail} classN='col-2'/>
                        {/* <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i> */}
                           
                        <div className="col-2">
                            <div className="input-group">
                                <label className="label">Currency</label>
                                <div className="input-group-icon">  
                                    {/* <CurrencySelect value={setrCurrency}/> */}
                                    <select class="form-control selectpicker"  onChange={(e)=>setsCurrency(e.target.value)}>
                                <option disabled="disabled" selected="selected"> Currency</option>
                                {configs.currencies.map((c,index)=>{
                                    return <option value={c}>{c}</option>
                                })}
                            </select> 
                            {/* <div className="rs-select2 js-select-simple select--no-search">
                            <select class='form-control selectpicker' value={sCurrency} onChange={(e)=>setsCurrency(e.target.value)}>
                                <option disabled="disabled" selected="selected">Choose Currency</option>
                                <option value='CAD'>CAD</option>
                                <option value='NKF'>NKF</option>
                                <option value='BIRR'>BIRR</option>
                                <option value='Shilling'>Shilling</option>
                            </select>
                            <div className="select-dropdown"></div>
                        </div> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-2">
                            <div className="input-group">
                            
                                <label className="label">Placeholder</label>
                                <div className="input-group-icon">
                                    <input className="input--style-4 js-datepicker" type="text" name="birthday"/>
                                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                </div> 
                            </div>
                        </div> */}
                        <Input name={sPlacehold} label="Placehold" required="" setUsername={setsPlaceholder} error="" value={sPlacehold} classN='col-2'/>

                    </div>
                    <hr style={{backgroundColor:'gray',height:'2px'}}/>
                    <div className="row row-space">
                    <div  className="col-2">
                    <div className="input-group">
                    <label className="label">Agent <span class="required"></span></label>
                        <div className="rs-select2 js-select-simple select--no-search">
                            <select class='form-control selectpicker' value={userId} onChange={(e)=>setUserId(e.target.value)}>                               
                                {users.map((item,index)=>{
                                       return <option value={item.id}>{item.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    </div>
                    <div className="col-2">
                            <div className="input-group">
                            <label className="label">status</label>
                            <div className="rs-select2 js-select-simple select--no-search">
                            <select class='form-control selectpicker' style={{minWidth:'200px'}} value={status}  onChange={(e)=>setStatus(e.target.value)}>
                                <option value='Pending'>Pending</option>
                                <option value='Paid'>Paid</option>
                                <option value='NotPaid'>NotPaid</option>
                            </select>
                            
                        </div>
                            </div>
                        </div>
                    <div className="col-2">                  
                    <div className="input-group">    
                               <label className="label">Reference</label>                          
                                <input className="input--style-4" type="text" name="phone" value={referenceP} onChange={(e)=>setReference(e.target.value)} classN='col-2'/>
                            </div>
                    </div>
                    
                        <div className="col-2">
                            <div className="input-group">
                                <label className="label">Comment</label>
                                <textarea className="input--style-4" type="text" style={{minWidth:'200px'}}name="first_name" value={comment} onChange={(e)=>setComment(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                    <div className="col-12">
                    <div className='input-group'>
                        <Button variant='success' style={{marginLeft:'325px',minWidth:'100px'}} onClick={()=>handleEdit()}>Update</Button>
                        <Button  variant='warning' style={{marginLeft:'50px',minWidth:'100px'}} onClick={()=>handlePageSwitch()}>Back</Button>
                        </div>
                    </div>
                    
                    </div>
                </form>
            </div>):(
                <div className="card-body">
                <div className="edit-top">
               
               <label>Ticket Number<h4 style={{color:'blue',fontWeight:'bold'}}>{ticketNo}</h4></label> 
                </div>
                {Message &&
                            <Alert variant='success'>{Message}</Alert>}
                {errored &&
                            <Alert variant='danger'>{errored}</Alert>}
                <form method="POST">
                    <div className="row row-space">
                    <div className="col-2">
                            <div className="input-group">
                            <label className="label">status</label>
                            <div className="rs-select2 js-select-simple select--no-search">
                            <select class='form-control selectpicker' style={{minWidth:'200px'}} value={status}  onChange={(e)=>setStatus(e.target.value)}>
                                <option value='Pending'>Pending</option>
                                <option value='Paid'>Paid</option>
                                <option value='NotPaid'>NotPaid</option>
                            </select>
                            <div className="select-dropdown"></div>
                        </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group">
                                <label className="label">Comment</label>
                                <textarea className="input--style-4" type="text" style={{minWidth:'500px'}}name="first_name" value={comment} onChange={(e)=>setComment(e.target.value)}/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row ">
                    <div className="col-12">
                    <div className='input-group'>
                        <Button variant='success' style={{marginLeft:'325px',minWidth:'100px'}} onClick={()=>handleEdit()}>Update</Button>
                        <Button  variant='warning' style={{marginLeft:'50px',minWidth:'100px'}} onClick={()=>handlePageSwitch()}>Back</Button>
                        </div>
                    </div>
                    
                    </div>
                </form>
            </div>
            )
            }
        </div>
    </div>
</div>
</div>
)
}

export default Edit