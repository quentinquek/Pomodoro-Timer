import React, {useState, useEffect} from "react";
import {Button, Text, VStack, HStack, Box} from "@chakra-ui/react";
import {CircularProgress, CircularProgressLabel} from "@chakra-ui/react";

interface TimerProps {
  workMinutes: number;
  shortBreakMinutes: number;
}

const Timer = ({workMinutes, shortBreakMinutes}: TimerProps) => {
  const [sessionType, setSessionType] = useState<string>("Work"); // work/break
  const [timeLeft, setTimeLeft] = useState<number>(workMinutes * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [cycles, setCycles] = useState(0);

  let interval: NodeJS.Timeout | undefined;

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      if (timeLeft === 0) {
        setSessionType((prevType) => (prevType === "Work" ? "Break" : "Work"));
        setTimeLeft(
          (sessionType === "Work" ? shortBreakMinutes : workMinutes) * 60
        );
      }
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, sessionType]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSessionType("Work");
    setTimeLeft(workMinutes * 60);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const percentageRemaining =
    100 -
    (timeLeft /
      ((sessionType === "Work" ? workMinutes : shortBreakMinutes) * 60)) *
      100;

  return (
    <VStack spacing="24px">
      <CircularProgress
        value={percentageRemaining}
        size="sm"
        color="purple.700"
        thickness="5px"
        backgroundColor="rgba(0, 0, 0, 0.4)"
        borderRadius="full"
      >
        <CircularProgressLabel
          fontSize="6xl"
          textColor="white"
        >
          <Text fontSize="6xl">{formatTime(timeLeft)}</Text>
          <Text fontSize="lg" fontWeight="bold">{sessionType === "Work" ? "Work" : "Break"}</Text>
        </CircularProgressLabel>
      </CircularProgress>
      <HStack spacing="12px">
        <Button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</Button>
        <Button onClick={resetTimer}>Reset</Button>
      </HStack>
      {/* <Text>{isBreak ? "Break" : "Work"}</Text> */}
      {/* <Text>Cycles completed: {cycles}</Text> */}
    </VStack>
  );
};

export default Timer;
