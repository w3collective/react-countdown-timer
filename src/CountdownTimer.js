import React, { useState, useEffect } from "react";

const CountdownTimer = () => {

  const getCountdown = () => {
    const year = new Date().getFullYear() + 1;
    const timeRemaining = new Date(`${year}-1-1`) - new Date();
    let countdown = {};
    if (timeRemaining > 0) {
      countdown = {
        Days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((timeRemaining / 1000 / 60) % 60),
        Seconds: Math.floor((timeRemaining / 1000) % 60),
      };
    }
    return countdown;
  };
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    setTimeout(() => {
      setCountdown(getCountdown());
    }, 1000);
  });

  const data = [];
  Object.entries(countdown).forEach(([unit, value]) => {
    data.push(
      <li key={Math.random().toString(16)}>
        <strong>{value}</strong> {unit}
      </li>
    );
  });

  return (
    <div>
      <h1>New Year Countdown</h1>
      <ul>{data}</ul>
    </div>
  );
  
};
export default CountdownTimer;
