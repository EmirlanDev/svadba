"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  // Укажи конечную дату (например, через 15 дней)
  const targetDate = new Date("2025-10-19T15:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div
      data-aos="zoom-in-up"
      className="flex flex-col items-center text-center mt-10"
    >
      <h2 className="text-3xl my-6">Тойго чейин:</h2>
      <div className="flex space-x-3 text-3xl font-mono">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days.toString().padStart(2, "0")}</span>
          <span className="text-sm">күн</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours.toString().padStart(2, "0")}</span>
          <span className="text-sm">саат</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
          <span className="text-sm">мүнөт</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
          <span className="text-sm">секунд</span>
        </div>
      </div>
    </div>
  );
}
