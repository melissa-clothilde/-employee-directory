import React from 'react';
import "./style.css";

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
          {props.sortColumn}
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

