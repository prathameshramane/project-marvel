import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import React, { useRef, useState } from "react";

interface MarvelSelectProps {
  h?: string | number;
  w?: string | number;
  selectedOption?: string;
  children?: any;
}

const MarvelSelect: React.FC<MarvelSelectProps> = (
  props: MarvelSelectProps
) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Box position="relative" w={props?.w ?? "full"}>
      <InputGroup>
        <Input
          ref={inputRef}
          w={props.w ?? "full"}
          h={props.h ?? 10}
          borderRadius={8}
          readOnly
          value={props.selectedOption}
          cursor="pointer"
          onClick={() => setIsFocused(!isFocused)}
        ></Input>
        <InputRightElement onClick={() => setIsFocused(!isFocused)}>
          {isFocused ? <FaChevronUp /> : <FaChevronDown />}
        </InputRightElement>
      </InputGroup>
      {isFocused && (
        <Box
          w={props.w ?? "full"}
          minH={4}
          border="1px solid #dcdcdc"
          zIndex="10"
          position="absolute"
          backgroundColor="white"
          borderRadius="lg"
          boxShadow="lg"
          p={2}
        >
          {props.children}
        </Box>
      )}
    </Box>
  );
};

export default MarvelSelect;
