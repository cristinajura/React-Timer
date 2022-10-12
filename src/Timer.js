import './App.css';
import React, {useEffect, useState} from 'react';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = 'December, 31, 2022';

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor(time / (1000 * 60 * 60)) % 24);
    setMinutes(Math.floor(time / (1000 * 60) % 60));
    setSeconds(Math.floor(time / 1000) % 60);
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="container">
      <div className='text'>Happy New Year In</div>
      <div className='timer'>
        <div className='box'>{days > 9 ? days : "0" + days}
        <p>Days</p>
      </div>
        <div className='box'>{hours > 9 ? hours : '0' + hours}
          <p>Hours</p>
        </div>
        <div className='box'>{minutes > 9 ? minutes : '0' + minutes}
        <p>Minutes</p>
        </div>
        <div className='box'>{seconds > 9 ? seconds : '0' + seconds}
        <p>Seconds</p>
        </div>
      </div>
    </div>
      
  );
}

export default Timer;
