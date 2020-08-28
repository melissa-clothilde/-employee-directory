import React from 'react';
import "./style.css";
import Modal from '../Modal';

function EmployeeRow({name, occupation, location, id, image, removeEmployee}) {
  return (
    <tbody>
      <tr>
        <td>
          {name}
        </td>
        <td>
          {occupation}
        </td>
        <td>
          {location}
        </td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target={`#${id}`}>View Photo
          </button>
          <Modal id= {id} name={name} image={image}/>
        </td>
        <td>
          <button
            onClick={() => removeEmployee(id)}
            className="remove">X
          </button>
        </td>
      </tr>
    </tbody>
  )
}

export default EmployeeRow;
