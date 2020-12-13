import React,{useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState';

function Balance() {
    const contextdat=useContext(GlobalContext);
     const amounts= contextdat.transaction.map(transaction => transaction.amount);
    // const amounts="256.00";
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
      <h1 id="balance">AED {total}</h1>
            
        </>
    )
}

export default Balance
