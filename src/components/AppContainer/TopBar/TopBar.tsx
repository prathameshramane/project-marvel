import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import OrderByFilter from "./OrderByFilter";
import DateDescriptorFilter from "./DateDescriptorFilter";

const TopBar: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      width="full"
      height={16}
      bgColor={colorMode === "dark" ? "gray.900" : "white"}
      mx={2}
      mb={2}
      borderRadius="lg"
    >
      <Flex alignItems="center" height="full" p={4} gap={6}>
        <Box w="18rem">
          <OrderByFilter />
        </Box>
        <Box w="18rem">
          <DateDescriptorFilter />
        </Box>
      </Flex>
    </Box>
  );
};

export default TopBar;
