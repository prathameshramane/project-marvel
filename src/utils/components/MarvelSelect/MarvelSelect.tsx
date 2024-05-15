import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
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
  const [isFocused, setIsFocused] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <InputGroup>
        <Input
          ref={inputRef}
          w={props.w ?? "full"}
          h={props.h ?? 10}
          borderRadius={8}
          readOnly
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          cursor="pointer"
          value={props.selectedOption}
        ></Input>
        <InputRightElement>
          <FaChevronDown
            color="green.500"
            onClick={() => inputRef.current?.focus()}
          />
        </InputRightElement>
      </InputGroup>
      {isFocused && (
        <Box
          w={props.w ?? "full"}
          minH={4}
          border="1px solid #dcdcdc"
          zIndex="10"
          position="relative"
          backgroundColor="white"
          borderRadius="lg"
          boxShadow="lg"
          p={2}
        >
          {props.children}
        </Box>
      )}
    </>
  );
};

export default MarvelSelect;
