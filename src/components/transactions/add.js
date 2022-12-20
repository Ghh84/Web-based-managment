import { useEffect, useState } from "react";
import { Button, Alert } from "react-bootstrap";
import TransactionService from '../../services/transaction.service';
import UserService from '../../services/user.service';
import AuthService from '../../services/auth.service';
import configs from '../../configs/local'
import _ from 'lodash'
const Add=({handlePageSwitch})=>{
      const [sName,setsName]=useState('')
      const [sCity,setsCity]=useState('')
      const [sAmount,setsAmount]=useState('')
      const [sCountry,setsCountry]=useState('')
      const [sCurrency,setsCurrency]=useState('')
      const [sPhone,setsPhone]=useState('')
      const [sEmail,setsEmail]=useState('')
      const [rName,setrName]=useState('')
      const [rCity,setrCity]=useState('')
      const [rAmount,setrAmount]=useState('')
      const [rCountry,setrCountry]=useState('')
      const [rCurrency,setrCurrency]=useState('')
      const [rPhone,setrPhone]=useState('')
      const [rEmail,setrEmail]=useState('')
      const [userId,setUserId]=useState('')
      const [referenceP,setReference]=useState('')
      const [users,setUsers]=useState([])
      const [message,setMessage]=useState('')
      const [succeded,setSucceded]=useState('')
      const [errored,setErrored]=useState('')
      function handleAdd(){
        const addObject={
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
            ticketNo:'T'+_.times(9, () => _.random(35).toString(36)).join('')
        }
        console.log('going to add a new transaction....',addObject)
        //validate data before sending
        
        if(addObject.sName==''||addObject.sAmount==''||addObject.sPhone==''|| addObject.rName==''||addObject.rAmount==''||
        addObject.rPhone=='' ||addObject.userId=='' || addObject.rCurrency=='') setMessage('One or more information is missing!')
        else{
        TransactionService.addTransaction(addObject).then((res)=>{
            
            console.log('response from addition',res.data)
            setErrored('')
            setSucceded('A new Transaction is successfully added!')
        }).catch((err)=>{
            setSucceded('')
            setErrored('New Transaction creation failed!')
            setMessage('')
        })
    }
      }
      useEffect(()=>{

        setUserId(AuthService.getCurrentUser().userId)
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
            <div className="card-body">
                <h2 className="title">Add Transaction</h2>
                <hr style={{backgroundColor:'gray',height:'2px'}}/>
                {!!message &&
                            <Alert variant='danger'>{message}</Alert>}
                {!!succeded &&
                            <Alert variant='success'>{succeded}</Alert>}
                {!!errored &&
                            <Alert variant='danger'>{errored}</Alert>}
                <form method="POST">
                <h4 className="sub-title"> Sender Details:</h4>
                    <div className="row row-space">
                        <div className="col-2">
                            <div className="input-group">
                                <label className="label">Name<span class="required"></span></label>
                                <div className="input-group-icon">
                                <input className="form-control"  type="text" name="first_name" onChange={(e)=>setsName(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group">
                                <label className="label">City</label>
                                <div className="input-group-icon">
                                    <input className="form-control"  type="text" name="first_name" onChange={(e)=>setsCity(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group">
                                <label className="label">Phone <span class="required"></span></label>
                                <div className="input-group-icon">
                                    <input className="form-control"  type="text" name="first_name" onChange={(e)=>setsPhone(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group">
                                <label className="label">Amount <span class="required"></span></label>
                                <div className="input-group-icon">
                                    <input className="form-control"  type="text" name="first_name" onChange={(e)=>setsAmount(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row row-space">
                        <div className="col-2">
                            <div className="input-group">
                            <label className="label">Country</label>
                            <div className="rs-select2 js-select-simple select--no-search">
                            <select class="form-control selectpicker"  onChange={(e)=>setsCountry(e.target.value)}>
                                <option disabled="disabled" selected="selected">Country</option>
                                {configs.countries.map((c,index)=>{
                                    return <option value={c}>{c}</option>
                                })}
                            </select> 
                            <div className="select-dropdown"></div>
                        </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group">
                                <label className="label">Email</label>
                                <div className="input-group-icon">
                                    <input className="form-control" type="text" name="birthday" onChange={(e)=>setsEmail(e.target.value)}/>
                                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group">
                            <label className="label">Currency</label>
                            <div className="rs-select2 js-select-simple select--no-search">
                            {/* <select class='form-control selectpicker' onChange={(e)=>setsCurrency(e.target.value)}>
                                <option disabled="disabled" selected="selected">Choose Currency</option>
                                <option value='CAD'>CAD</option>
                                <option value='NKF'>NKF</option>
                                <option value='BIRR'>BIRR</option>
                                <option value='Shilling'>Shilling</option>
                            </select> */}
                            <select class="form-control selectpicker"  onChange={(e)=>setsCurrency(e.target.value)}>
                                <option disabled="disabled" selected="selected">Currency</option>
                                {configs.currencies.map((c,index)=>{
                                    return <option value={c}>{c}</option>
                                })}
                            </select> 
                            <div className="select-dropdown"></div>
                        </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group">
                                <label className="label">Placeholder</label>
                                <div className="input-group-icon">
                                    <input className="form-control" type="text" name="birthday"/>
                                    <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <hr style={{backgroundColor:'gray',height:'2px'}}/>
                    <h4 className="sub-title">Receiver Details:</h4>
                    <div className="row row-space">
                        <div className="col-2">
                            <div className="input-group">
                                <label className="label">Name <span class="required"></span></label>
                            <div className="input-group-icon">
                                <input className="form-control"  type="email" name="email" onChange={(e)=>setrName(e.target.value)}/>
                            </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group">
                                <label className="label">City</label>
                            <div className="input-group-icon">
                                <input className="form-control"  type="text" name="phone" onChange={(e)=>setrCity(e.target.value)}/>
                            </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group">
                                <label className="label">Phone <span class="required"></span></label>
                            <div className="input-group-icon">
                                <input className="form-control"  type="email" name="email" onChange={(e)=>setrPhone(e.target.value)}/>
                            </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group">
                                <label className="label">Amount <span class="required"></span></label>
                            <div className="input-group-icon">
                                <input className="form-control"  type="text" name="phone" onChange={(e)=>setrAmount(e.target.value)}/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-space">
                    <div className="col-2">
                            <div className="input-group">
                            <label className="label">Country</label>
                            <div className="rs-select2 js-select-simple select--no-search">
                            <select class="form-control selectpicker"  onChange={(e)=>setrCountry(e.target.value)}>
                                <option disabled="disabled" selected="selected">Country</option>
                                {configs.countries.map((c,index)=>{
                                    return <option value={c}>{c}</option>
                                })}
                            </select> 

                            <div className="select-dropdown"></div>
                        </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group">
                                <label className="label">Email</label>
                                <div className="input-group-icon">
                                    <input className="form-control"  type="text" name="phone" onChange={(e)=>setrEmail(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group">
                            <label className="label">Currency <span class="required"></span></label>
                            <div className="rs-select2 js-select-simple select--no-search">
                            {/* <select class='form-control selectpicker' onChange={(e)=>setrCurrency(e.target.value)}>
                                <option disabled="disabled" selected="selected">Choose Currency</option>
                                <option value='CAD'>CAD</option>
                                <option value='NKF'>NKF</option>
                                <option value='BIRR'>BIRR</option>
                                <option value='Shilling'>Shilling</option>
                            </select> */}
                            <select class="form-control selectpicker"  onChange={(e)=>setrCurrency(e.target.value)}>
                                <option disabled="disabled" selected="selected">Currency</option>
                                {configs.currencies.map((c,index)=>{
                                    return <option value={c}>{c}</option>
                                })}
                            </select> 
                            
                            <div className="select-dropdown"></div>
                        </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group">
                                <label className="label">Placeholder</label>
                                <div className="input-group-icon">
                                    <input className="form-control"  type="text" name="phone"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style={{backgroundColor:'gray',height:'2px'}}/>
                    <div className="row row-space">
                    <div  className="col-2">
                    <div className="input-group">
                    <label className="label">Agent <span class="required"></span></label>
                        <div className="rs-select2 js-select-simple select--no-search">
                            <select class='form-control selectpicker' onChange={(e)=>setUserId(e.target.value)}>
                                <option disabled="disabled" selected="selected">Choose Agent</option>
                                {users.map((item,index)=>{
                                       return <option value={item.id}>{item.name}</option>
                                })}
                            </select>
                            <div className="select-dropdown"></div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="col-2">   
                        <div className="input-group"> 
                            <label className="label">Reference</label>   
                            <div className="input-group-icon">
                                <input className="form-control"  type="text" name="phone" onChange={(e)=>setReference(e.target.value)}/>
                            </div>                       
                        </div>
                    </div>
                    </div>
                    <div className="row row-space">
                    < span></span><span></span><span></span><span></span><span></span><span></span>
                    <div > <Button variant='success' className="bsuccess" style={{}} onClick={()=>handleAdd()}>Add</Button>
                        <Button  variant='warning' className="bwarning" style={{marginLeft:'10px',minWidth:'10px'}} onClick={()=>handlePageSwitch()}>Back</Button>
                    </div>
                    </div>
                    
              </form>
            </div>
        </div>
        
    </div>
    
</div>
</div>
)
}

export default Add