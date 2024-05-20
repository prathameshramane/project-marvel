import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface MarvelSelectOptionProps {
  label: string;
  value: string | null;
  onSelect: (values: {
    selectedValue: string | null;
    selectedLabel?: string;
  }) => void;
  isSelected?:boolean;
  StartButton?: React.FC;
  EndButton?: React.FC;
}

const MarvelSelectOption: React.FC<MarvelSelectOptionProps> = ({
  label,
  value,
  onSelect,
  isSelected,
  StartButton,
  EndButton,
}: MarvelSelectOptionProps) => {
  return (
    <Box sx={{ ":hover": { bg: "blue.100" } }} p={1} borderRadius="lg" bg={isSelected ? "blue.100" : "inherit"}>
      <Flex alignItems="center" gap="0.5rem">
        {StartButton && <StartButton />}
        <Text
          flex="1"
          onClick={() => {onSelect({ selectedValue: value, selectedLabel: label });
          }}
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
