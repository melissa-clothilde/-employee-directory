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



  handleInputChange = event => {
    // this.state.search(event.target.value);
    // console.log("event.target.value", event.target.value);
    this.setState({ search: event.target.value });
    console.log("search state1", this.state.search);
    // for (let i = 0; i < this.state.employees.length; i++) {
    //     const employeeName = this.state.employees[i].name;
    //     const employeeOccupation = this.state.employees[i].occupation;
    //     const employeeLocation = this.state.employees[i].location;
    //     console.log("employeeName", employeeName);
    //     console.log("employeeOccupation", employeeOccupation);
    //     console.log("employeeLocation", employeeLocation);

    //     if (employeeName || employeeOccupation || employeeLocation === this.state.search) {
    //       this.setState({ employees })
    //     }
    //     else {
    //       alert("No such employee found!")
    //     }
    //   }
       
    // }
    // const employees = this.state.employees;
    // if (!search) {
    //   return
    // }
    // else {
    //   this.state.employees.map(employee => {

    //   })


      // const employees = this.state.employees.filter(employee => employee.includes(search));
      // for (let i = 0; i < this.state.employees.length; i++) {
      //   const employee = this.state.employees[i].name;
        // console.log("employee", employee)
        // const employees = this.state.employees[i].name.filter(employee => this.state.employees[i].name.includes(search));
        // this.setState({ employees })
      //   if (employee.includes(search)) {
      //     console.log("if works!")
      //     this.setState({ employees })
      //   }
      // }
      // return (employee[i].includes(search) ? this.setState({ employees: employee }) : alert("No such employee found!"))
    
    // console.log(employees);
    // this.setState({ employees })
    // return
  }

  componentDidMount(search) {
    // const employees = this.state.employees;
    console.log("search state2", this.state.search);
    if (!search) {
      return
    }
    else {
      let employees = this.state.employees.filter(employee => employee.name.includes(search));
      this.setState({ employees })
    }
  }

  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  sortEmployees = (event) => {
    event.preventDefault();
    const employees = this.state.employees;
    employees.sort((a,b) => (a.name > b.name) ? 1 : -1)
    this.setState({ employees });
  }
  sortOccupation = (event) => {
    const employees = this.state.employees;
    employees.sort((a,b) => (a.occupation > b.occupation) ? 1 : -1)
    this.setState({ employees });
  }
  sortLocation = (event) => {
    event.preventDefault();
    const employees = this.state.employees;
    employees.sort((a,b) => (a.location > b.location) ? 1 : -1)
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
          sortOccupation={this.sortOccupation}
          sortLocation={this.sortLocation}
        />
        <SearchResults
          employees={this.state.employees}
          removeEmployee={this.removeEmployee} />
      </div>
    )
  }
}

export default App;
