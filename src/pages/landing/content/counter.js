import React, { useEffect, useRef, useState } from 'react';
import { Text } from '@chakra-ui/react';
import './content.css';

const Counter = ({ date }) => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = date;

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      // eslint-disable-next-line
      clearInterval(interval.current);
    };
  });

  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <section>
            <Text>{timerDays}</Text>
            <Text color="gray.500">Días</Text>
          </section>
          <span>:</span>
          <section>
            <Text>{timerHours}</Text>
            <Text color="gray.500">Horas</Text>
          </section>
          <span>:</span>
          <section>
            <Text>{timerMinutes}</Text>
            <Text color="gray.500">Minutos</Text>
          </section>
          <span>:</span>
          <section>
            <Text>{timerSeconds}</Text>
            <Text color="gray.500">Segundos</Text>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Counter;
