// React Imports
import {useState, useEffect} from "react";
import {Settings} from "@/types";

const useTimer = (settings: Settings) => {
  const {workMinutes, shortBreakMinutes, longBreakMinutes} = settings;
  const [sessionType, setSessionType] = useState<
    "Work" | "Short Break" | "Long Break"
  >("Work");
  const [timeLeft, setTimeLeft] = useState(workMinutes * 60);
  const [isActive, setIsActive] = useState(false);
  const [workCycle, setWorkCycle] = useState<number>(0);
  const [shortBreakCycle, setShortBreakCycle] = useState<number>(0);
  const [longBreakCycle, setLongBreakCycle] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    const handleInterval = () => {
      setTimeLeft((prevTime) => prevTime - 1);
    };

    const handleWorkCycle = () => {
      const newWorkCycle = workCycle + 1;
      setWorkCycle(newWorkCycle);
      const isLongBreak = newWorkCycle % 4 === 0;
      setSessionType(isLongBreak ? "Long Break" : "Short Break");
      setTimeLeft(isLongBreak ? longBreakMinutes * 60 : shortBreakMinutes * 60);
    };

    const handleBreakCycle = () => {
      setSessionType("Work");
      setTimeLeft(workMinutes * 60);
      if (workCycle % 4 === 0) {
        setLongBreakCycle((prevCycle) => prevCycle + 1);
      } else {
        setShortBreakCycle((prevCycle) => prevCycle + 1);
      }
    };

    if (isActive && timeLeft > 0) {
      interval = setInterval(handleInterval, 1000);
    } else {
      clearInterval(interval);
      if (timeLeft === 0) {
        const audio = new Audio("/sounds/timeup.mp3");
        audio.play();
        sessionType === "Work" ? handleWorkCycle() : handleBreakCycle();
      }
    }

    return () => clearInterval(interval);
  }, [
    isActive,
    timeLeft,
    workMinutes,
    shortBreakMinutes,
    sessionType,
    longBreakMinutes,
    workCycle,
  ]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSessionType("Work");
    setTimeLeft(workMinutes * 60);
  };

  return {
    sessionType,
    timeLeft,
    isActive,
    toggleTimer,
    resetTimer,
    workCycle,
    shortBreakCycle,
    longBreakCycle,
  };
};

export default useTimer;
