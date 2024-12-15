"use client";

import { useEffect, useState } from "react";
import styles from "./Navigation.module.css";

const WeddingCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const weddingDate = new Date("2025-03-01T00:00:00");
      const currentTime = new Date();
      const difference = weddingDate.getTime() - currentTime.getTime();

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.countdown}>
      <div className={styles.timeUnit}>
        <div className={styles.timeValue}>{timeLeft.days}</div>
        <span className={styles.label}>Days</span>
      </div>
      <div className={styles.timeUnit}>
        <div className={styles.timeValue}>{timeLeft.hours}</div>
        <span className={styles.label}>Hours</span>
      </div>
      <div className={styles.timeUnit}>
        <div className={styles.timeValue}>{timeLeft.minutes}</div>
        <span className={styles.label}>Minutes</span>
      </div>
      <div className={styles.timeUnit}>
        <div className={styles.timeValue}>{timeLeft.seconds}</div>
        <span className={styles.label}>Seconds</span>
      </div>
    </div>
  );
};

export default WeddingCountdown;
