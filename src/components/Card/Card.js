import React from 'react';
import './Card.css';

function Card({ item }) {
  return (
    <article className='card'>
      <div className='top'>
        <img src={`/images/${item.image?.asset?._ref}`} alt={item.name.en} />
      </div>
      <div className='bottom'>
        <h2>{item.name.en}</h2>
      </div>
    </article>
  );
}

export default Card;
