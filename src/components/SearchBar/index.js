import React from 'react';
import "./style.css";

function SearchBar({search, handleInputChange, sortEmployees, sortColumn, sortLocation, sortOccupation}) {
  return (
    <form>
      <input
        type="text"
        name="search"
        value={search}
        placeholder="Search for an employee by name..."
        className="search-input"
        onChange={handleInputChange}
      />

      <div className="dropdown container">Sort by: 
        <button
          className="dropdown-toggle name-sort"
          type="button"
          id="dropdownMenuButton"
          onClick={sortEmployees}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          {sortColumn}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button
            className="dropdown-item"
            type="button"
            onClick={sortEmployees}>Name
          </button>
          <button
            className="dropdown-item"
            onClick={sortOccupation}
            type="button">Occupation
          </button>
          <button
            className="dropdown-item"
            onClick={sortLocation}
            type="button">Location
          </button>
        </div>
      </div>

    </form>
  )
}

export default SearchBar

