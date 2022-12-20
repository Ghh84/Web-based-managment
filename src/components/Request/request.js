import React from "react";
import { useEffect, useState } from "react";
import _ from 'lodash'
//import Joi from 'joi-browser'
import BalanceRequestService from "../../services/balanceRequest.service";
import UserService from '../../services/user.service';
import AuthService from '../../services/auth.service'
import BalanceService from "../../services/balance.service";
import Pagination from "../common/Pagination";
import RequestTable from './requestTable';

const Request=({handlePageSwitch,setPageState,selectedTxn})=>{
    console.log('selected request.........',selectedTxn)
    const [amount,setAmount]=useState('0')
    const [currency,setsCurrency]=useState('NKF')
    const [comment,setComment]=useState('')
    const [users,setUsers]=useState([])    
    const [userId,setUserId]=useState()
    const [Message,setMessage]=useState('')
    const [errored,setErrored]=useState('')
    const [SelectedRequest, setSelectedRequest] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedPage, setSelectedPage] = useState('')
    const [visible, setVisible] = useState(true);
    const dataLimit=4
    const [sortColumn, setColumnData] = useState({
        path: 'createdDate',
        order: 'desc',
      })
    const columns=[{ path: 'name', label: 'Agent Name' },
    { path: 'Amount', label: 'Amount' },
    { path: 'currency', label: 'Currency' },
    { path: 'createdDate', label: 'Created Date' },
    { path: 'updatedDate', label: 'Updated Date' },
    // { path: 'status', label: 'Status' },
    { path: 'comment', label: 'Additional Information' },
    { path: 'approveReject', label: 'Approve/Reject Request' }]
     
    const handleSort = (sortColumn) => {
        setColumnData({ path: sortColumn.path, order: sortColumn.order })
        //this.setState({ sortColumn })
    }
    const getPaginatedData = () => {
        //sort the data based on the column name
        const sortedData = _.orderBy(SelectedRequest, [sortColumn.path], [sortColumn.order])
        //paginate data
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit
        //setSelectedRequest(sortedData.slice(startIndex, endIndex))
        return sortedData.slice(startIndex, endIndex)
    }
    function handleApproveRequest(item,action){  
        
        BalanceService.updateBalanceFromRequest(item).then(()=>{
                alert('Approved request balance')
                BalanceRequestService.updateBalanceReauest([item,action]).then(()=>{
                    alert('updated status of requested balanced')
                    window.location.reload(false)
                })
        })
    }   
    function handleReject(item,action){
        alert(action)
        BalanceRequestService.updateBalanceReauest([item,action]).then(()=>{
            alert('updated status of requested balanced')
            window.location.reload(false)
        })
    }
    function getUserName(id){
       return( users.filter(userId=>id).map(user => {
           if(user.userId==id) return user.name

       }
          ))
    }
    function handleRequest(){
        const editObject={
            amount:amount,
            currency:currency,
            userId:AuthService.getCurrentUser().userId,
            comment:comment
        }
        
        //validate data before sending
        BalanceRequestService.addRequest(editObject).then((res)=>{
            
            setMessage('Transaction was successfully updated');
            setErrored('')
        }).catch((err)=>{
            setMessage('')
            setErrored('Transaction update failed')
        })
    }   
    // function handlePageSwitch(){
    //     alert('I am here')
    //     setPageState({ isEdit: 0, isAdd: 0, isRequest:0});
    //     window.location.reload(false)
    //   }    
    useEffect(()=>{
        UserService.getUsers().then((res)=>{
            console.log('at response from users',res.data)
            setUsers(res.data)
        })
        BalanceRequestService.getRequest().then((res)=>{
         setSelectedRequest(res.data)
        }).catch((err)=>{
        setMessage('')
        setErrored('Transaction update failed')
    })
    //getPaginatedData()

    },[])
    return(
        <div className="card card-4">
           <RequestTable
               columns={columns}
               handleRequest={handleRequest}
               handlePageSwitch={handlePageSwitch}
               setPageState={setPageState}
               sortColumn={sortColumn}
               handleSort={handleSort}
               SelectedRequest={getPaginatedData()}
               getUserName={getUserName}
               handleApproveRequest={handleApproveRequest}
               handleReject={handleReject}
               Message={Message}
               errored={errored}
               setAmount={setAmount}
               amount={amount}
               currency={currency}
               setsCurrency={setsCurrency}
               comment={comment}
               setComment={setComment}
               visible={visible}
               setVisible={setVisible}
           />
         {AuthService.getCurrentUser().role===1 &&
           <Pagination
                data={SelectedRequest}
                dataLimit={dataLimit}
                setSelectedPage={setSelectedPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
           />
         }
        </div>   
)
}

export default Request