import React from 'react';
import "./style.css";

function EmployeeRow(props) {
  return (
        <tbody>
          <tr>
            <td>
            {props.name}
            </td>
            <td>
            {props.occupation}
            </td>
            <td>
            {props.location}
            </td>
            <td>
            <a href="{props.image}">View Photo</a>
            </td>
            <td
              onClick={() => props.removeEmployee(props.id)} className="remove">
                𝘅
            </td>
          </tr>
        </tbody>
  )
}

export default EmployeeRow;
