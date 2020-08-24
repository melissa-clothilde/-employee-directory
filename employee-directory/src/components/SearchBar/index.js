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
// const update = () => {
//   if (this.value === "Name") { 
//     this.value = "Name";}
//   else {
//     this.value = "Name";
//   }

//   if (this.value === "Occupation") {
//     console.log("this.value", this.value)
//     this.previousSibling.value = "Occupation";}
//   else { 
//     this.value = "Name";
//   }

//   if (this.value === "Location") {
//     this.value = "Location";
//   } 
//   else {
//     this.value = "Name";
//   }
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

      <div className="dropdown">Sort by:
        <button
          className="btn btn-secondary dropdown-toggle name-sort"
          type="button"
          id="dropdownMenuButton"
          onClick={props.sortEmployees}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          Name
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button
            className="dropdown-item"
            type="button"
            onClick={props.sortEmployees}>Name
          </button>
          <button
            className="dropdown-item"
            onClick={props.sortOccupation}
            type="button">Occupation
          </button>
          <button
            className="dropdown-item"
            onClick={props.sortLocation}
            type="button">Location
          </button>
        </div>
      </div>

    </form>
  )

}

export default SearchBar

