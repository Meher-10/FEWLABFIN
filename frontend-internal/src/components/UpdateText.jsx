import React, { useState } from 'react';

function UpdateText() {
  const [text, setText] = useState('Hello, World!');

  // Event handler to update text
  function handleClick() {
    setText('You clicked the button!');
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{text}</h1>
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default UpdateText;
