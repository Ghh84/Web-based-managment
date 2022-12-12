

import React,{useEffect, useState} from 'react'
import { Button, Alert,Modal } from "react-bootstrap";
import UserService from '../../services/user.service';
import BalanceService from '../../services/balance.service'
import Input from '../common/input';
import Pagination from '../common/Pagination';
import _ from 'lodash'

const Add=({setPageState})=>{
    return(
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
            <div className="card card-4">
                <div className="card-body">
                    <h2 className="title">Registration Form</h2>
                    <form method="POST">
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Name</label>
                                    <input className="input--style-4" type="text" name="first_name"/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">City</label>
                                    <input className="input--style-4" type="text" name="first_name"/>
                                </div>
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Country</label>
                                    <div className="input-group-icon">
                                        <input className="input--style-4 js-datepicker" type="text" name="birthday"/>
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Email</label>
                                    <div className="input-group-icon">
                                        <input className="input--style-4 js-datepicker" type="text" name="birthday"/>
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Email</label>
                                    <input className="input--style-4" type="email" name="email"/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Phone</label>
                                    <input className="input--style-4" type="text" name="phone"/>
                                </div>
                            </div>
                        </div>
                        <hr style={{color:'blue',height:'2px'}}/><br/>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Username</label>
                                    <input className="input--style-4" type="email" name="email"/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Password</label>
                                    <input className="input--style-4" type="password" name="phone"/>
                                </div>
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="rs-select2 js-select-simple select--no-search">
                                <select className='form-control selectpicker'>
                                    <option disabled="disabled" selected="selected">Choose role</option>
                                    <option>Subject 1</option>
                                    <option>Subject 2</option>
                                    <option>Subject 3</option>
                                </select>
                                <div className="select-dropdown"></div>
                            </div>
                        </div>
                        <div className="row row-space">
                        <div className="col-2">
                        <div className='input-group'>
                            <Button variant='success' >save</Button>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className='input-group'>
                            <Button  variant='warning' onClick={()=>setPageState({ isEdit: 0, isAdd: 0 })}>cancel</Button>
                            </div>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}
const Edit=({setPageState})=>{
    return(
        <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
            <div className="card card-4">
                <div className="card-body">
                    <h2 className="title">Edit Form</h2>
                    <form method="POST">
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Name</label>
                                    <input className="input--style-4" type="text" name="first_name"/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">City</label>
                                    <input className="input--style-4" type="text" name="first_name"/>
                                </div>
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Country</label>
                                    <div className="input-group-icon">
                                        <input className="input--style-4 js-datepicker" type="text" name="birthday"/>
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Email</label>
                                    <div className="input-group-icon">
                                        <input className="input--style-4 js-datepicker" type="text" name="birthday"/>
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Email</label>
                                    <input className="input--style-4" type="email" name="email"/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Phone</label>
                                    <input className="input--style-4" type="text" name="phone"/>
                                </div>
                            </div>
                        </div>
                        <hr style={{color:'blue',height:'2px'}}/><br/>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Username</label>
                                    <input className="input--style-4" type="email" name="email"/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">Password</label>
                                    <input className="input--style-4" type="password" name="phone"/>
                                </div>
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="rs-select2 js-select-simple select--no-search">
                                <select className='form-control selectpicker'>
                                    <option disabled="disabled" selected="selected">Choose role</option>
                                    <option>Subject 1</option>
                                    <option>Subject 2</option>
                                    <option>Subject 3</option>
                                </select>
                                <div className="select-dropdown"></div>
                            </div>
                        </div>
                        <div className="row row-space">
                        <div className="col-2">
                        <div className='input-group'>
                            <Button variant='success' >save</Button>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className='input-group'>
                            <Button  variant='warning' onClick={()=>setPageState({ isEdit: 0, isAdd: 0 })}>cancel</Button>
                            </div>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}


const Balance =({handleSelection})=>{
    const [userData,setUserData]=useState([])
    const [{ isEdit, isAdd }, setPageState] = useState({ isEdit: 0, isAdd: 0 })
    const [selectedTxn, setSelectedTxn] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [modalUsdAmt,setModalUsdAmt]=useState(0)
    const [modalLocalAmt,setModalLocalAmt]=useState(0)
    const [modalAdminUsdAmt,setModalAdminUsdAmt]=useState(0)
    const [modalAdminLocalAmt,setModalAdminLocalAmt]=useState(0)
    const [modalComm,setModalComm]=useState('')
    const [addOrSubtruct,setAddOrSubtruct]=useState('add')
    const [userUsdAmt,setUserUsdAmt]=useState(0)
    const [userLocalAmt,setUserLocalAmt]=useState(0)
    const [userAdminUsdAmt,setUserAdminUsdAmt]=useState(0)
    const [userAdminLocalAmt,setUserAdminLocalAmt]=useState(0)
    const [user,setUser]=useState(1)
    const [balanceData,setBalanceData]=useState([])
    const [currency,setCurrency]=useState('')
    const [modalTitle,setModalTitle]=useState('')
    const [selectedPage, setSelectedPage] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const dataLimit=2;
    const [sortColumn, setColumnData] = useState({
        path: 'userId',
        order: 'asc',
      })
    const columns = [
        { path: 'userId', label: 'userId' },
        { path: 'Name', label: 'Name' },
        { path: 'UsdBalance', label: 'USD Balance' },
        { path: 'localBalance', label: 'Local Balance' }]

    const gnumber=100000
    const gnumber2=0
    useEffect(()=>{
        console.log('going to get balance')
         BalanceService.getBalances().then((res)=>{
          const response=res.data
          console.log('data fetched....',response)
          setBalanceData(response)
         }).catch(err=>{
           console.log(err)
             console.log('error fetching data from users table..........')
         })
         UserService.getUsers().then((res)=>{
            const response=res.data
            console.log('data fetched....',response)
            setUserData(response)
           }).catch(err=>{
             console.log(err)
               console.log('error fetching data from users table..........')
           })
      },[])
      function handleUpdate(){
        setShow(false)
        console.log(userUsdAmt,userLocalAmt,addOrSubtruct,modalUsdAmt,modalLocalAmt,user)
        alert(addOrSubtruct)
        let updatedUsdBalance=0
        let updatedLocalBalance=0
        let updatedAdminUsdBalance=0
        let updatedAdminLocalBalance=0
        //if(addOrSubtruct=='add') updatedBalance=!!userAmt?userAmt:0 + parseInt(modalAmt)
    if(addOrSubtruct==='add') {
        updatedUsdBalance=userUsdAmt + parseInt(modalUsdAmt)
        updatedLocalBalance=userLocalAmt + parseInt(modalLocalAmt)
        updatedAdminUsdBalance=userAdminUsdAmt + parseInt(modalAdminUsdAmt)
        updatedAdminLocalBalance=userAdminLocalAmt + parseInt(modalAdminLocalAmt)
    }
        else {
            updatedUsdBalance=userUsdAmt - parseInt(modalUsdAmt)
            updatedLocalBalance=userLocalAmt - parseInt(modalLocalAmt)
            updatedAdminUsdBalance=userAdminUsdAmt - parseInt(modalAdminUsdAmt)
            updatedAdminLocalBalance=userAdminLocalAmt - parseInt(modalAdminLocalAmt)
        } 
        console.log('updated amount...',updatedLocalBalance)
        const balanceObj={
            userId:user,
            usdBalance:updatedUsdBalance,
            localBalance:updatedLocalBalance,
            adminUsdBalance:updatedAdminUsdBalance,
            adminLocalBalance:updatedAdminLocalBalance,
            comment:modalComm
        }
        BalanceService.updateBalance(balanceObj).then((res)=>{
            console.log(res.data)
            window.location.reload(false)
        }).catch((err)=>{

        })
        
      }
      function getUserName(id){
        return( userData.filter(userId=>id).map(user => {
            if(user.userId==id) return user.name
 
        }
           ))
     }
      function handleModalOpen(userId,usdAdminAmt,localAdminAmt,usdAmt,localAmt,action,currency, title){
        setUserUsdAmt(parseFloat(usdAmt))
        setUserLocalAmt(parseFloat(localAmt))
        setUserAdminUsdAmt(parseFloat(usdAdminAmt))
        setUserAdminLocalAmt(parseFloat(localAdminAmt))
        setModalTitle(title)
        setUser(userId)
        setAddOrSubtruct(action)
        setCurrency(currency)
        console.log(addOrSubtruct,userUsdAmt)
        setShow(true)
      }
      const getPaginatedData = () => {
        //sort the data based on the column name
        const sortedData = _.orderBy(balanceData, [sortColumn.path], [sortColumn.order])
        //paginate data
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit
        return sortedData.slice(startIndex, endIndex)
        //return PaginationData(data, currentPage, datalimit)
        // const startIndex = (currentPage - 1) * dataLimit
        // return _(data).slice(startIndex).take(dataLimit).value()
      }
      const handleSort = (sortColumn) => {
        setColumnData({ path: sortColumn.path, order: sortColumn.order })
        //this.setState({ sortColumn })
      }
    return(
        <React.Fragment>
        {/*<div>
             { !isEdit?
            (<div className='balanceBody'>
                    <div className="cards">
                    {!_.isEmpty(balanceData) && balanceData.map(item=>{
                       return( 
                       <div className={`card text-white mb-3 ${parseFloat(item.USDbalance)>0?'bg-success':'bg-danger'}`} style={{maxWidth:'18rem',padding:'0px'}}>
                        <div class="card-header">{item.userId} USDbalance</div>
                        <div class="card-body">
                            <div>
                            <div className='circle'>
                            <p class="card-text"> {parseFloat(item.USDbalance).toLocaleString('en-US')}</p>
                            </div>
                            <div className='circle'>
                            <p class="card-text"> {parseFloat(item.localBalance).toLocaleString('en-US')}</p>
                            </div>
                            </div>
                            <div className='card-actions'>
                            <Button variant='primary' onClick={()=>handleModalOpen(item.id,item.balance,'add')}><h1>+</h1></Button>
                            <Button variant='danger' onClick={()=>handleModalOpen(item.id,item.balance,'subtruct')}><h1>-</h1></Button>
                            </div>
                        </div>
                    </div>)
                    })}
                    */}
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    
                    >
                    <Modal.Header closeButton className='teableHeader'>
                        <Modal.Title>{modalTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row"><p>Admin balance:</p></div>
                        <div className="row">
                            <Input  label="Usd"   setUsername={setModalAdminUsdAmt} value={modalAdminUsdAmt} type="text" />
                            <Input  label="Local"  setUsername={setModalAdminLocalAmt} value={modalAdminLocalAmt} type="text" />
                        </div>
                        <hr style={{color:'blue',height:'2px'}}/><br/>
                        <div className="row"><p>User balance:</p></div>
                        <div className="row">
                            <Input  label="Usd"   setUsername={setModalUsdAmt} value={modalUsdAmt} type="text" />
                            <Input  label="Local"  setUsername={setModalLocalAmt} value={modalLocalAmt} type="text" />
                        </div>
                        <div className="row">
                           <div className='col-8'>
                                <label className="label">Comment</label>
                                <textarea className="input--style-4" value={modalComm} type="text" onChange={(e)=>setModalComm(e.target.value)}/>                                                   
                            </div>
                        </div>
            
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                        <Button variant="primary" onClick={()=>handleUpdate()}>update</Button>
                    </Modal.Footer>
                </Modal>
                        
                    {/* </div>
                </div>):!isAdd? 
                <Edit setPageState={setPageState}></Edit>:<Add setPageState={setPageState}></Add>   

        </div> */}
        <table className="table" style={{width: '800px',marginTop:'50px', marginLeft:'350px'}}>
        <thead className="tableHeader">
            <tr>
                {/* <th rowSpan={2}>userId</th> */}
                <th rowSpan={2}>Name</th>
                <th colSpan={2}>Admin balance</th>
                <th colSpan={2}>User balance</th>
                <th rowSpan={2}>Edit Balance</th>
            </tr>
            <tr>
               
                <th >USD </th>
                <th >Local </th>
                <th >USD </th>
                <th >Local </th>
                
            </tr>
        </thead>
      <tbody>
      {!_.isEmpty(balanceData) && getPaginatedData().map(item=>{
          return(<tr>
              {/* <td>{item.userId}</td> */}
              <td>{getUserName(item.userId)}</td>
              <td>{parseFloat(item.adminUSD)}</td>
              {/* <td>
                  <Button className="btn btn-primary btn-sm"  onClick={()=>handleModalOpen(item.userId,item.USDbalance,'add','usd')}>+</Button>&nbsp;
                  <Button className="btn btn-danger btn-sm"  onClick={()=>handleModalOpen(item.userId,item.USDbalance,'subtruct','usd')}>-</Button>
              
              </td> */}
              <td>{parseFloat(item.adminLocal)}</td>              
              <td>{parseFloat(item.USDbalance)}</td>
              <td>{parseFloat(item.localBalance)}</td>
              <td>
                  <Button className="btn btn-primary btn-sm" onClick={()=>handleModalOpen(item.userId,item.adminUSD,item.adminLocal,item.USDbalance,item.localBalance,'add','local','Add balance')}>+</Button>&nbsp;
                  <Button className="btn btn-danger btn-sm" onClick={()=>handleModalOpen(item.userId,item.adminUSD,item.adminLocal,item.USDbalance,item.localBalance,'subtruct','local','Deduct balance')}>-</Button>
              </td>
          </tr>
      )})}
      </tbody>
      </table>
      <Pagination
          data={balanceData}
          dataLimit={dataLimit}
          setSelectedPage={setSelectedPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        </React.Fragment>
    )
}

export default Balance