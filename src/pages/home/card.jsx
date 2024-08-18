import React from "react";

const Card = ({ icon, name, value, bg }) => {
  return (
    <div className="col-md-3 p-1 w-auto">
      <div className={`card info_card ${bg} text-light`}>
        <div className="card-body d-flex flex-column p-2 gap-2 h-100">
          <div className="card-title pt-2">
            <i class={`bi ${icon} d-flex justify-content-center fs-3`}></i>
          </div>
          <div className="card-text d-flex flex-column align-items-center justify-content-center justify-content-center h-100 gap-1 ">
            <small>{name}</small>
            <small>{value}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
