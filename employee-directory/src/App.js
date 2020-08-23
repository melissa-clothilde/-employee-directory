import React, { Component } from 'react';
import EmployeeCard from './components/EmployeeCard';
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees,
    search: ""
  };

  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  onChange = (event) => this.setState({ [event.target.name]: event.target.value });

  filterEmployee = (event, search) => {
    event.preventDefault();
    console.log('search value', search);
    this.state.employees.filter(employee =>
      search === employee.name);
    this.setState({ employees });
  }


  // Map over this.state.wmployeews and render a EmployeeCard component for each employee object
  render() {
    return (
      <div>
        <Title>Employee Directory</Title>
        <SearchBar
          filterEmployee={this.filterEmployee}
          onChange={this.onChange}
          search={this.state.search}
        />
        <Wrapper>
          {this.state.employees.map(employee => (
            <EmployeeCard
              removeEmployee={this.removeEmployee}
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
