import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [seconds, setSeconds] = useState(0);

  const updateClock = () => {
    if (seconds < 59  ) {
      setSeconds(seconds + 1);
    } else {
      setSeconds(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(updateClock, 100);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div style={{ fontSize: '2rem', background: '#0E0E0E', color: 'white', display: 'flex' }}>
        <div style={{ paddingRight: '0.5rem', borderRight: '1px solid white' }}>
          {Math.floor(seconds / 10)}
        </div>
        <div style={{ paddingLeft: '0.5rem' }}>
          {seconds % 10}
        </div>
      </div>
    </div>
  );
};

export default Clock;
