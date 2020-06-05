import React from "react";

//Allow to scroll through is children
//The aim is to let the rest of the page fixed
function Scroll(props) {
  return (
    <div style={{ overflowY: "scroll", minHeight: "200px" }}>
      {props.children}
    </div>
  );
}

export default Scroll;
