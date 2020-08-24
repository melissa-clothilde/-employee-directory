import React from 'react';
import EmployeeCard from '../EmployeeCard';
import Wrapper from "../Wrapper";

  // Map over this.state.employeews and render a EmployeeCard component for each employee object

function SearchResults(props) {
  return (
    <Wrapper>
      {props.employees.map(employee => (
        <EmployeeCard
          removeEmployee={props.removeEmployee}
          id={employee.id}
          key={employee.id}
          name={employee.name}
          image={employee.image}
          occupation={employee.occupation}
          location={employee.location}
        />
      ))}
    </Wrapper>
  )
}

export default SearchResults;