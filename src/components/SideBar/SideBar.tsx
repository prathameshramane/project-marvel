import { Box, Link, List, ListIcon, ListItem, Stack } from "@chakra-ui/react";
import { FaUber } from "react-icons/fa";

import { sidebarFilters } from "../../fixtures/sidebarFilters";

const SideBar = () => {
  return (
    <Box>
      <List spacing={3} fontSize="xl">
        <Stack>
          {sidebarFilters.map((filter) => (
            <ListItem as={Link} key={filter.query} p={2}>
              <ListIcon as={filter.icon} color="red.500" /> {filter.name}
            </ListItem>
          ))}
        </Stack>
      </List>
    </Box>
  );
};

export default SideBar;
