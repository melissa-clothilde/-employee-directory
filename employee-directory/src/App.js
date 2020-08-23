import React, { Component } from 'react';
import EmployeeCard from './components/EmployeeCard';
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees
  };

 // Map over this.state.wmployeews and render a EmployeeCard component for each employee object
  render() {
    return (
      <div>
        <Title>Employee Directory</Title>
        <SearchBar />
        <Wrapper>
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            location={employee.location}
          />
        ))}
        </Wrapper>
        </div>
    )
  }
}

export default App;
