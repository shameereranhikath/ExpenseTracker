import React,{useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState';

function Incomeexpense() {
  const contextdat=useContext(GlobalContext);
  const amounts = contextdat.transaction.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
    return (
        <>
             <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
    <p id="money-plus" className="money plus">AED {income}</p>
        </div>
        <div>
          <h4>Expense</h4>
    <p id="money-minus" className="money minus">AED {expense}</p>
        </div>
      </div>
            
        </>
    )
}

export default Incomeexpense
