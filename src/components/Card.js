import React from 'react';

const Card = ({ title, body, username }) => {
  return (
    <div className='card displayCard'>
      <div className='card-content'>
        <span className='card-title' style={{ color: '#374EA1' }}>
          {title}
        </span>
        <p>{body}</p>
      </div>
      <div className='card-action' style={{ color: '#0DAF55' }}>
        {username}
      </div>
    </div>
  );
};

export default Card;
