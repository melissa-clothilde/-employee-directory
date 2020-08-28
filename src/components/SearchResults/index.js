import React from 'react';
import EmployeeRow from '../EmployeeRow';
import Wrapper from "../Wrapper";
import TableHeading from "../TableHeading";

function SearchResults({employees, removeEmployee}) {
  return (
    <Wrapper>
      <TableHeading />
      {employees.map(employee => (
        <EmployeeRow
          removeEmployee={removeEmployee}
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