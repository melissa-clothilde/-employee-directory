import React, { Component } from 'react';
import EmployeeCard from './components/EmployeeCard';
import employees from "./employees.json";

class App extends Component {
  state = {
    employees
  };

 // Map over this.state.wmployeews and render a EmployeeCard component for each employee object
  render() {
    return (
      <div className='wrapper'>
        <h1>Employee Directory</h1>
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            mage={employee.image}
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}
      </div>

    )
  }
}

export default App;
