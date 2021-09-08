import logo from './logo.svg';
import './App.css';
import data from './db';
import React from 'react';
import Bar from './bar';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      display: false
    }
  }

  handleAdd(event){
    const obj = new Object()
    obj.argument = this._arg.value
    obj.value=this._val.value

    data.push(obj)
    console.log(data)
  }

  handleDelete(event){
    data.pop()
  }

  handleClear(event)
  {
      this._arg.value=""
      this._val.value=""
  }

  handleGenerate(event){
    this.setState(prev => {
      return{
        display: !prev.display
      }
    })
  }

  render(){
    return(
      <div>
        <h1 className="main">Bar Graph Creator using React Js</h1>
        <hr/>
        <h2 className="title">Enter the Argument:</h2>
        <input type="text" ref={value => this._arg=value} className="input" />
        <h2 className="title">Enter the value:</h2>
        <input type="text" ref={value => this._val=value} className="input"/>
        <br/>
        <button onClick={this.handleAdd.bind(this)} className="btn">Add</button>
        <button onClick={this.handleClear.bind(this)} className="btn">Clear</button>
        <button onClick={this.handleDelete.bind(this)} className="btn">Delete</button>
        <button onClick={this.handleGenerate.bind(this)} className="btn">Generate</button>
        <hr/>
        {this.state.display ? <Bar /> : <h2>Click on the Generate button to create the Bar Graph.</h2>}
      </div>
    )
  }
}


export default App;
