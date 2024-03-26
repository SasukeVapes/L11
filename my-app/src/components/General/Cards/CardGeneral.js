// CardGeneral.js

import React from 'react';

export const CardGeneral = ({ card, onGoSomewhereClick }) => {
  const handleClick = () => {
    if (onGoSomewhereClick) {
      onGoSomewhereClick(card);
    }
  };

  return (
    <>
      <div className="card w-18rem my-4">
        <img className="card-img-top mt-2 px-4" src={card?.product?.picture} alt="course" />
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.description}</p>
          <p className="btn btn-outline-danger" onClick={handleClick}>
            Go somewhere
          </p>
        </div>
      </div>
    </>
  );
};
