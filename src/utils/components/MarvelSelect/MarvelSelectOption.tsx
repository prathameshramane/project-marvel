import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface MarvelSelectOptionProps {
  label: string;
  value: string;
  onSelect: (values: { selectedValue: string; selectedLabel?: string }) => void;
  StartButton?: React.FC;
  EndButton?: React.FC;
}

const MarvelSelectOption: React.FC<MarvelSelectOptionProps> = ({
  label,
  value,
  onSelect,
  StartButton,
  EndButton,
}: MarvelSelectOptionProps) => {
  return (
    <Box sx={{ ":hover": { bg: "blue.100" } }} p={1} borderRadius="lg">
      <Flex alignItems="center" gap="0.5rem">
        {StartButton && <StartButton />}
        <Text
          flex="1"
          onClick={() =>
            onSelect({ selectedValue: value, selectedLabel: label })
          }
          px={2}
        >
          {label}
        </Text>
        {EndButton && <EndButton />}
      </Flex>
    </Box>
  );
};

export default MarvelSelectOption;
