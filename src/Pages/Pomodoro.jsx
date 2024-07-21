import React, { useState, useEffect, useRef } from 'react';

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(1500);
  const [mode, setMode] = useState('focus');
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const modes = {
    focus: 1500,
    shortBreak: 300,
    longBreak: 900,
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isRunning && timeLeft !== 0) {
      clearInterval(timerRef.current);
    }

    if (timeLeft === 0) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setTimeLeft(modes[newMode]);
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  return (
    <div className="ml-4 p-4 text-center">
      <h1 className="text-2xl font-bold text-purple-700 mb-4">POMODORO TIMER</h1>
      <p className="text-gray-700 mb-6">
        The Pomodoro Technique is a time management tool that involves splitting work tasks into 25-minute intervals, known as pomodoros, with breaks scheduled in between each interval.
      </p>
      <div className="bg-purple-50 p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 mx-2 ${mode === 'focus' ? 'bg-purple-500 text-white' : 'bg-purple-100 text-purple-700'} rounded-lg`}
            onClick={() => handleModeChange('focus')}
          >
            Focus
          </button>
          <button
            className={`px-4 py-2 mx-2 ${mode === 'shortBreak' ? 'bg-purple-500 text-white' : 'bg-purple-100 text-purple-700'} rounded-lg`}
            onClick={() => handleModeChange('shortBreak')}
          >
            Short break
          </button>
          <button
            className={`px-4 py-2 mx-2 ${mode === 'longBreak' ? 'bg-purple-500 text-white' : 'bg-purple-100 text-purple-700'} rounded-lg`}
            onClick={() => handleModeChange('longBreak')}
          >
            Long break
          </button>
        </div>
        <div className="text-center text-6xl font-bold text-purple-700 mb-6">
          {formatTime(timeLeft)}
        </div>
        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-700"
            onClick={handleStartStop}
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
