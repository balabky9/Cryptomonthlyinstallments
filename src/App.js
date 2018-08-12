import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dharma from "@dharmaprotocol/dharma.js";
class App extends Component {
  
  constructor(props) {
    
    super(props);

  }
  async loanRequest() {
    const dharma = new Dharma("http://localhost:8545");
    const loanRequest = await LoanRequest.create(dharma, {
      principalAmount: 5,
      principalToken: "WETH",
      collateralAmount: 10,
      collateralToken: "REP",
      interestRate: 1,
      termDuration: 6,
      termUnit: "months",
      debtorAddress: "0xd2f45e02ab7b190ac9a87b743eab4c8f2ed0e491",
      expiresInDuration: 5,
      expiresInUnit: "days",
  });
  console.log(loanRequest);
  }

  render() {
   
    
   
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          this.loanRequest;
        </p>
      </div>
    );
  }
}

export default App;
