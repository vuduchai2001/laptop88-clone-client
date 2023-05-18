import React, { useState, useEffect } from "react";

function Clock({ deadline }) {
  deadline = new Date("2023-05-20 23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState(deadline - new Date().getTime());

  useEffect(() => {
    const timerID = setInterval(() => {
      const newTimeLeft = deadline - new Date().getTime();
      setTimeLeft(newTimeLeft);
    }, 1000);
    return () => clearInterval(timerID);
  }, [deadline]);

  const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft / 1000 / 60) % 60)).padStart(
    2,
    "0"
  );
  const hours = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const days = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2);

  return (
    <div className="deal--time--holder flex">
      <p>
        <b>{days}</b>
        <span> Ngày</span>
      </p>
      <span className="two-point">:</span>
      <p>
        <b>{hours}</b>
        <span> Giờ</span>
      </p>
      <span className="two-point">:</span>
      <p>
        <b>{minutes}</b>
        <span> Phút</span>
      </p>
    </div>
  );
}

export default Clock;
