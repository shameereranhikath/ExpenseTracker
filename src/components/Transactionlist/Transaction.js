import React,{useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState';

function Transaction({trans}) {
    const {deleteTransaction}=useContext(GlobalContext);
    const sign=trans.amount<0?'-':'+'
    return (
 <li className={trans.amount<0?'minus':'plus'}>
 {trans.text}<span>{sign}$ {trans.amount}</span> <button className="delete-btn" onClick={()=>deleteTransaction(trans.id)}>x</button>

 </li>
    )
}

export default Transaction
