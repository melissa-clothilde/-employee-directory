import React, { Component } from 'react';
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import employees from "./employees.json";
import SearchResults from './components/SearchResults';


class App extends Component {
  state = {
    employees,
    search: "",
    sortColumn: "Name"
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
    console.log("search state", event.target.value);
    if (!event.target.value) {
      this.setState({ employees })
    }
    else {
      let newEmployees = employees.filter(
        employee => {
          console.log(employee);
          const name = employee.name;
          return name.includes(event.target.value)
        });
      this.setState({ employees: newEmployees })
    }
  }

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  sortEmployees = () => {
    const employees = this.state.employees;
    employees.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({ employees, sortColumn: "Name" });
  }
  sortOccupation = () => {
    const employees = this.state.employees;
    employees.sort((a, b) => (a.occupation > b.occupation) ? 1 : -1)
    this.setState({ employees, sortColumn: "Occupation" });
  }
  sortLocation = () => {
    const employees = this.state.employees;
    employees.sort((a, b) => (a.location > b.location) ? 1 : -1)
    this.setState({ employees, sortColumn: "Location" });
  }

  render() {
    return (
      <div>
        <Title>Employee Directory</Title>
        <SearchBar
          handleInputChange={this.handleInputChange}
          results={this.state.search}
          sortEmployees={this.sortEmployees}
          sortOccupation={this.sortOccupation}
          sortLocation={this.sortLocation}
          sortColumn={this.state.sortColumn}
        />
        <SearchResults
          employees={this.state.employees}
          removeEmployee={this.removeEmployee} />
      </div>
    )
  }
}

export default App;
