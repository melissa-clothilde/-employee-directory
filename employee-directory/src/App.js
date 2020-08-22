import React, { Component } from 'react';
import employees from "./employees.json";

class App extends Component {
  state = {
    employees
  };
    
  
  render () {
    return (
      <div>
      <h1>Employee Directory</h1>
      </div>

    )
  }
}

export default App;
