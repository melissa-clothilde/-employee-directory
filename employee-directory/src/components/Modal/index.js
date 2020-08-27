import React from 'react';

function Modal(props) {
  // console.log("props.image", props.image)
  return (
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
  )
}

export default Modal;