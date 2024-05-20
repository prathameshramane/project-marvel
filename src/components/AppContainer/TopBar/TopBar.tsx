import { Box } from "@chakra-ui/react";
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
      <Box maxW={72}>
        <OrderByFilter />
      </Box>
    </Box>
  );
};

export default TopBar;
