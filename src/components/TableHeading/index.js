import React from 'react';

function TableHeading() {
  return (
    <thead className="thead-light">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Occupation</th>
        <th scope="col">Location</th>
        <th scope="col">Photo</th>
        <th scope="col">Remove</th>
      </tr>
    </thead>
  )
}

export default TableHeading;