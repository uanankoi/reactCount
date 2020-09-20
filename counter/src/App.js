import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      total : 99
    }
  }
  render(){
    return (
      <>
        <h1>{this.state.total}</h1>
        <button onClick={()=>{this.setState({total:this.state.total+1})}}>+</button>
        <button onClick={()=>{this.setState({total:this.state.total-1})}}>-</button>
      </>  
    )
  }
  
}

export default App;
