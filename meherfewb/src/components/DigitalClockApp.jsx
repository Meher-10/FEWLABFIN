// // import React, { useState, useEffect, useRef } from 'react';

// // function DigitalClockApp() {
// //   const [currentTime, setCurrentTime] = useState(new Date());
// //   const [intervalMinutes, setIntervalMinutes] = useState('');
// //   const [countdown, setCountdown] = useState(null);
// //   const clockIntervalRef = useRef(null);
// //   const countdownIntervalRef = useRef(null);

// //   const handleStart = () => {
// //     if (isNaN(intervalMinutes) || intervalMinutes <= 0) {
// //       alert("Please enter a valid positive number for minutes!");
// //       return;
// //     }
// //     setCountdown(parseInt(intervalMinutes));
    
// //     if (clockIntervalRef.current) clearInterval(clockIntervalRef.current);
// //     if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);

// //     clockIntervalRef.current = setInterval(() => {
// //       setCurrentTime(new Date());
// //     }, 1000);

// //     countdownIntervalRef.current = setInterval(() => {
// //       setCountdown(prev => {
// //         if (prev > 0) return prev - 1;
// //         clearInterval(countdownIntervalRef.current);
// //         clearInterval(clockIntervalRef.current);
// //         return 0;
// //       });
// //     }, 60000); // every minute
// //   };

// //   const handleStop = () => {
// //     if (clockIntervalRef.current) clearInterval(clockIntervalRef.current);
// //     if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
// //     clockIntervalRef.current = null;
// //     countdownIntervalRef.current = null;

// //     // Optionally, you can round the interval to nearest minute if you want (but here, simply stop it)
// //     setCountdown(prev => prev !== null ? prev : null);
// //   };

// //   useEffect(() => {
// //     return () => {
// //       if (clockIntervalRef.current) clearInterval(clockIntervalRef.current);
// //       if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
// //     };
// //   }, []);

// //   const formatTime = (date) => {
// //     const hrs = date.getHours().toString().padStart(2, '0');
// //     const mins = date.getMinutes().toString().padStart(2, '0');
// //     const secs = date.getSeconds().toString().padStart(2, '0');
// //     return `${hrs}:${mins}:${secs}`;
// //   };

// //   return (
// //     <div style={{ textAlign: 'center', marginTop: '50px' }}>
// //       <h1>🕰️ Digital Clock</h1>
// //       <div>
// //         <input
// //           type="number"
// //           placeholder="Enter interval in minutes"
// //           value={intervalMinutes}
// //           onChange={(e) => setIntervalMinutes(e.target.value)}
// //           style={{ padding: '10px', fontSize: '16px', width: '250px' }}
// //         />
// //       </div>
// //       <br />
// //       <button
// //         onClick={handleStart}
// //         style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginRight: '10px' }}
// //       >
// //         Start
// //       </button>

// //       <button
// //         onClick={handleStop}
// //         style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
// //       >
// //         Stop
// //       </button>
      
// //       <br /><br />
// //       <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
// //         {formatTime(currentTime)}
// //       </div>
// //       {countdown !== null && (
// //         <div style={{ fontSize: '24px', marginTop: '20px' }}>
// //           ⏳ Remaining Interval: {countdown} minute(s)
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default DigitalClockApp;
// import React, { useState, useEffect, useRef } from 'react';

// function DigitalClockApp() {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [intervalMinutes, setIntervalMinutes] = useState('');
//   const [countdown, setCountdown] = useState(null);
//   const clockIntervalRef = useRef(null);
//   const countdownStartMinuteRef = useRef(null);

//   const handleStart = () => {
//     if (isNaN(intervalMinutes) || intervalMinutes <= 0) {
//       alert("Please enter a valid positive number for minutes!");
//       return;
//     }

//     setCountdown(parseInt(intervalMinutes));
//     countdownStartMinuteRef.current = new Date().getMinutes();

//     if (clockIntervalRef.current) clearInterval(clockIntervalRef.current);

//     clockIntervalRef.current = setInterval(() => {
//       const now = new Date();
//       setCurrentTime(now);

//       // every time a minute changes
//       if (now.getSeconds() === 0) {
//         setCountdown(prev => (prev > 0 ? prev - 1 : 0));
//       }
//     }, 1000); // tick every second
//   };

//   const handleStop = () => {
//     if (clockIntervalRef.current) clearInterval(clockIntervalRef.current);
//     clockIntervalRef.current = null;
//   };

//   useEffect(() => {
//     return () => {
//       if (clockIntervalRef.current) clearInterval(clockIntervalRef.current);
//     };
//   }, []);

//   const formatTime = (date) => {
//     const hrs = date.getHours().toString().padStart(2, '0');
//     const mins = date.getMinutes().toString().padStart(2, '0');
//     const secs = date.getSeconds().toString().padStart(2, '0');
//     return `${hrs}:${mins}:${secs}`;
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>🕰️ Digital Clock</h1>
//       <div>
//         <input
//           type="number"
//           placeholder="Enter interval in minutes"
//           value={intervalMinutes}
//           onChange={(e) => setIntervalMinutes(e.target.value)}
//           style={{ padding: '10px', fontSize: '16px', width: '250px' }}
//         />
//       </div>
//       <br />
//       <button
//         onClick={handleStart}
//         style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginRight: '10px' }}
//       >
//         Start
//       </button>

//       <button
//         onClick={handleStop}
//         style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
//       >
//         Stop
//       </button>
      
//       <br /><br />
//       <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
//         {formatTime(currentTime)}
//       </div>
//       {countdown !== null && (
//         <div style={{ fontSize: '24px', marginTop: '20px' }}>
//           ⏳ Remaining Interval: {countdown} minute(s)
//         </div>
//       )}
//     </div>
//   );
// }

// export default DigitalClockApp;
import React, { useState, useEffect, useRef } from 'react';

function DigitalClockApp() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [intervalMinutes, setIntervalMinutes] = useState('');
  const [countdown, setCountdown] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const clockIntervalRef = useRef(null);

  const handleStart = () => {
    if (countdown === null) {
      if (isNaN(intervalMinutes) || intervalMinutes <= 0) {
        alert("Please enter a valid positive number for minutes!");
        return;
      }
      setCountdown(parseInt(intervalMinutes));
    }
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    clockIntervalRef.current = setInterval(() => {
      setCurrentTime(new Date());

      if (isRunning) {
        const now = new Date();
        if (now.getSeconds() === 0) {
          setCountdown(prev => (prev > 0 ? prev - 1 : 0));
        }
      }
    }, 1000);

    return () => clearInterval(clockIntervalRef.current);
  }, [isRunning]);

  const formatTime = (date) => {
    const hrs = date.getHours().toString().padStart(2, '0');
    const mins = date.getMinutes().toString().padStart(2, '0');
    const secs = date.getSeconds().toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🕰️ Digital Clock</h1>
      <div>
        <input
          type="number"
          placeholder="Enter interval in minutes"
          value={intervalMinutes}
          onChange={(e) => setIntervalMinutes(e.target.value)}
          disabled={isRunning}
          style={{ padding: '10px', fontSize: '16px', width: '250px' }}
        />
      </div>
      <br />
      <button
        onClick={handleStart}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginRight: '10px' }}
      >
        {isRunning ? "Running..." : "Start/Resume"}
      </button>

      <button
        onClick={handleStop}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        disabled={!isRunning}
      >
        Stop
      </button>
      
      <br /><br />
      <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
        {formatTime(currentTime)}
      </div>
      {countdown !== null && (
        <div style={{ fontSize: '24px', marginTop: '20px' }}>
          ⏳ Remaining Interval: {countdown} minute(s)
        </div>
      )}
    </div>
  );
}

export default DigitalClockApp;
