import React from 'react';
import "./style.css";
import Modal from "../Modal";

function EmployeeRow(props) {
  const handleImageClick = (id) => {
    if (props.id === id) {
    console.log(id);
    }
  }
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
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => handleImageClick(props.id)}>View Photo
          </button>
          <Modal id={props.id} name={props.name} image={props.image}/>
        </td>
        <td>
          <button
            onClick={() => props.removeEmployee(props.id)}
            className="remove">X
          </button>
        </td>
      </tr>
    </tbody>
  )
}

export default EmployeeRow;
