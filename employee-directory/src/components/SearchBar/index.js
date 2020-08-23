import React, { Component } from 'react';
import "./style.css";

export class SearchBar extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search for an employee by name..."
          className="search-input"
        />
          <input
          type="submit"
          value="Search"
          className="btn"
        />
      </form>
    )
  }
}

export default SearchBar
