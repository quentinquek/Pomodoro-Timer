// ChakraUI Imports
import {Stat, StatLabel, StatNumber, StatHelpText} from "@chakra-ui/react";

interface MiniStatsProps {
  label: string;
  number: number;
  text: string;
}

const MiniStats: React.FC<MiniStatsProps> = ({label, number, text}) => {
  return (
    <>
      <Stat>
        <StatLabel fontWeight="bold">{label}</StatLabel>
        <StatNumber fontWeight="bold">{number}</StatNumber>
        <StatHelpText fontWeight="bold" whiteSpace="nowrap">{text}</StatHelpText>
      </Stat>   
    </>
  );
};

export default MiniStats;
