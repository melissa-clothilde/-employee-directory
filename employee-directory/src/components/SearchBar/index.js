import React from 'react';
import "./style.css";

// onChange = (event) => this.setState({ [event.target.name]: event.target.value });

// const filterEmployee = (event, search) => {
//   event.preventDefault();
//   console.log('search value', search);
  // this.state.employees.filter(employee =>
  //   search === employee.name);
  // this.setState({ employees });
// }

function SearchBar(props) {
    return (
      <form>
        <input
          type="text"
          name="search"
          value={props.search}
          placeholder="Search for an employee by name..."
          className="search-input"
          onChange={props.handleInputChange}
        />
          <input
          type="submit"
          value="Search"
          className="btn"
        />
      </form>
    )
  
}

export default SearchBar
