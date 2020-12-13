import React from 'react';

import './App.css';
import Balance from './components/Balance/Balance';
import Header from './components/Header/Header';
import Incomeexpense from './components/Incomeexpense/Incomeexpense';
import Addtransaction from './components/Transactionlist/Addtransaction';
import Transactionlist from './components/Transactionlist/Transactionlist';
import {GlobalProvider} from './components/Context/GlobalState';
function App() {
  return (
    <GlobalProvider>
        <div className="App">
      <Header/>
      <div className="container">
      <Balance/>
      <Incomeexpense/>
      <Transactionlist/>
      <Addtransaction/>

      </div>
      
    </div>

    </GlobalProvider>
  
  );
}

export default App;
