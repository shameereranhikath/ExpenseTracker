import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
const intialState ={
    transaction:[
 
]};



//Create Context
export const GlobalContext=createContext(intialState);

//Provider component

export const GlobalProvider=({children})=>{
    const[state,dispatch]=useReducer(AppReducer,intialState);
  function deleteTransaction(id){
    dispatch({
    type:'DELETE_TRANSACTION',
    payload:id
  })
  };

  function addTransaction(transaction){
    dispatch({
    type:'ADD_TRANSACTION',
    payload:transaction
  })
  };

    return(
    <GlobalContext.Provider value={{transaction:state.transaction,deleteTransaction,addTransaction
    }}>{children}</GlobalContext.Provider>)
}


