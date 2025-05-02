// import React, { useState } from 'react';
// import './App.css'; // import the CSS
// function App() {
//   const [scale, setScale] = useState(1);

//   const zoomIn = () => {
//     setScale(prev => Math.min(prev + 0.1, 3));
//   };

//   const zoomOut = () => {
//     setScale(prev => Math.max(prev - 0.1, 0.5));
//   };

//   const resetZoom = () => {
//     setScale(1);
//   };

//   return (
//     <div className="container">
//       <h2>Zoom In / Zoom Out Image</h2>
//       <div className="button-group">
//         <button onClick={zoomIn}>Zoom In</button>
//         <button onClick={zoomOut}>Zoom Out</button>
//         <button onClick={resetZoom}>Reset</button>
//       </div>
//       <div className="image-container">
        
//         <img
//   src="/Myimage.jpeg"
//   alt="Zoomable"
//   style={{
//     transform: `scale(${scale})`,
//     transition: 'transform 0.3s ease',
//   }}
// />
//       </div>
//       <p>Current Zoom: {Math.round(scale * 100)}%</p>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';
import DigitalClockApp from './components/DigitalClockApp';
import GfGWeatherApp from './components/GfGWeatherApp';
function App() {
 

  return (
    <>
    
    <GfGWeatherApp/>

    
    </>
    
  );
}

export default App;
