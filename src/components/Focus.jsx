import React, { useState } from 'react';


function Focus() {
  const [textFocused, setTextFocused] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
      <input
        type="text"
        placeholder="Click me"
        onFocus={() => setTextFocused(true)}
        onBlur={() => setTextFocused(false)}
        className={textFocused ? "focused-input" : ""}
      />

      <h3
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={hovered ? "blur" : ""}
      >
        Hover over this text
      </h3>

      <img
        src="https://via.placeholder.com/150"
        alt="example"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={hovered ? "blur" : ""}
        style={{ marginTop: "10px" }}
      />
    </div>
  );
}

export default Focus;
