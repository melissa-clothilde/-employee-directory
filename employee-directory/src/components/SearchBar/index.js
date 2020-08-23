import React from 'react';
import "./style.css";

function SearchBar(props) {
    return (
      <form onSubmit={() => props.filterEmployee}>
        <input
          type="text"
          value={props.search}
          name="search"
          placeholder="Search for an employee by name..."
          className="search-input"
          onChange={props.onChange}
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
