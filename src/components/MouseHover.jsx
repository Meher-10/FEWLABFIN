import React, { useState } from 'react';

function MouseHover() {
  const [message, setMessage] = useState('');

  function handleMouseEnter() {
    setMessage('You hovered over the text!');
  }

  function handleMouseLeave() {
    setMessage('');
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer', display: 'inline-block' }}
      >
        Hover over me!
      </h2>
      <p>{message}</p>
    </div>
  );
}

export default MouseHover;
