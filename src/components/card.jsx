import React from "react";
const Card = props => {
  return (
    <React.Fragment>
      {props.arr.map(e => (
        <div className="photo-and-descrp">
          <a href="#">
            <img src={e.img} />
            <div className="descrp">
              <p>{e.title}</p>
              <button>OPENINGS</button>
            </div>
          </a>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Card;
