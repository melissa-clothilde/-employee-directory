import React from "react";

function Wrapper(props) {
  return <table className="table">{props.children}</table>;
}

export default Wrapper;
