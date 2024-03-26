// CardContainerGeneral.js

import React from 'react';

import { CardGeneral } from './CardGeneral';

const CardContainer = ({ cards, onGoSomewhereClick }) => {
  return (
    <div className="container">
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-md-3">
            <CardGeneral card={card} onGoSomewhereClick={onGoSomewhereClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
