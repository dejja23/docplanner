import React from "react";
const Box = ({ arr }) => {
  return (
    <React.Fragment>
      {arr.map(e => (
        <div className="the-white-box-stuff">
          <img src={e.icon} alt="" />
          <h3>{e.h3}</h3>
          <p>{e.p}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Box;
