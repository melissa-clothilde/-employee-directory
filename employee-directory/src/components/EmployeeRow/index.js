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
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal">View Photo</button>
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">{props.name}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="img-container">
                    <img alt={props.name} src={props.image} />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
