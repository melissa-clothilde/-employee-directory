import React from "react";

function Wrapper({children}) {
  return <table className="table">{children}</table>;
}

export default Wrapper;
