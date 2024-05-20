import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import OrderByFilter from "./OrderByFilter";

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
      <Flex alignItems="center" height="full" p={4}>
        <Box w="18rem">
          <OrderByFilter />
        </Box>
      </Flex>
    </Box>
  );
};

export default TopBar;
