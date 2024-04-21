// React Imports
import React from "react";

// ChakraUI Imports
import {
  CircularProgress,
  CircularProgressLabel,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

interface TimerProps {
  percentageRemaining: number;
  displayTime: string;
  sessionType: string;
}

const Timer: React.FC<TimerProps> = ({
  percentageRemaining,
  displayTime,
  sessionType,
}) => {
  return (
    <>
      <CircularProgress
        value={percentageRemaining}
        size={useBreakpointValue({base: "xs", sm: "sm", md: "md"})}
        color={sessionType === "Work" ? "teal.200" : "red.200"}
        thickness="5px"
        backgroundColor="rgba(0, 0, 0, 0.6)"
        borderRadius="full"
      >
        <CircularProgressLabel
          fontSize="6xl"
          textColor="white"
        >
          <Text
            fontSize={{base: "6xl", sm: "8xl"}}
            fontWeight="bold"
          >
            {displayTime}
          </Text>
          <Text
            fontSize="2xl"
            fontWeight="bold"
          >
            {sessionType}
          </Text>
        </CircularProgressLabel>
      </CircularProgress>
    </>
  );
};

export default Timer;
