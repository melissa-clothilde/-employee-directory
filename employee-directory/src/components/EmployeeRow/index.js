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
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal">View Photo</button>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">{props.name}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
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
