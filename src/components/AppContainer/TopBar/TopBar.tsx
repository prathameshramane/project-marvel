import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import OrderByFilter from "./OrderByFilter";
import DateDescriptorFilter from "./DateDescriptorFilter";

const TopBar: React.FC = () => {
  return (
    <Box
      width="full"
      height={16}
      backgroundColor="white"
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
