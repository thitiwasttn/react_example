import React from "react";

const Box = (props) => {
  return(
      <div>
          <h2>This is form box</h2>
          {props.children}
      </div>
  );
}

export default Box;