import React,{useContext} from 'react'
// import {GlobalContext} from '../Context/GlobalState';
import {GlobalContext} from '../Context/GlobalState';
import Transaction from './Transaction';

function Transactionlist() {
    const contextdat=useContext(GlobalContext);
    // const vald=[{text:'ABCDEFGHR',id:2},{text:'DGDGDF',id:5}]
    console.log(contextdat.transaction)
    return (
        <>
            <h3>History</h3>
    <ul id="list" className="list">
          {contextdat.transaction.map((data,index)=>
         (<Transaction key={index} trans={data}/>
               

           ) )}

   
    </ul>
         </>
     )
}

export default Transactionlist
