import React, { Component } from 'react';
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import employees from "./employees.json";
import SearchResults from './components/SearchResults';


class App extends Component {
  state = {
    employees,
    search: ""
  };

  // componentDidMount() {
  //   const search = this.state.search;
  //   // const employees = this.state.employees;
  //   if (!search) {
  //     return
  //   }
  //   else {
  //     const employees = this.getSnapshotBeforeUpdate.employees.filter(employee => employee.includes(search));
  //     this.setState({ employees })
  //   }
  // }

  handleInputChange = event => {
    // this.state.search(event.target.value);
    console.log("event.target.value", event.target.value);

    const search = event.target.value;
    // const employees = this.state.employees;
    if (!search) {
      return
    }
    else {
      // const employees = this.state.employees.filter(employee => employee.includes(search));
      for (let i = 0; i < this.state.employees.length; i++) {
        const employee = this.state.employees[i].name;
        // console.log("employee", employee)
        // const employees = this.state.employees[i].name.filter(employee => this.state.employees[i].name.includes(search));
        // this.setState({ employees })
        if (employee.includes(search)) {
          console.log("if works!")
          this.setState({ employees })
        }
      }
      // return (employee[i].includes(search) ? this.setState({ employees: employee }) : alert("No such employee found!"))
    }
    // console.log(employees);
    // this.setState({ employees })
    // return
  }


  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  sortEmployees = (event) => {
    event.preventDefault();
    console.log("sorted!1")
    const employees = this.state.employees;
    employees.sort((a,b) => (a.name > b.name) ? 1 : -1)
    this.setState({ employees });
  }

  render() {
    return (
      <div>
        <Title>Employee Directory</Title>
        <SearchBar
          // filterEmployee={this.filterEmployee}
          handleInputChange={this.handleInputChange}
          results={this.state.search}
          sortEmployees={this.sortEmployees}
        />
        <SearchResults
          employees={this.state.employees}
          removeEmployee={this.removeEmployee} />
      </div>
    )
  }
}

export default App;
