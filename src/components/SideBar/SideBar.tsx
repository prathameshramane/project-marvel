import { Link, List, ListIcon, ListItem, Stack } from "@chakra-ui/react";

import { sidebarFilters } from "../../fixtures/sidebarFilters";

const SideBar = () => {
  return (
    <List spacing={3} fontSize="xl" bgColor="white" p={2} borderRadius="lg">
      <Stack>
        {sidebarFilters.map((filter) => (
          <ListItem as={Link} key={filter.query} p={2}>
            <ListIcon as={filter.icon} color="red.500" /> {filter.name}
          </ListItem>
        ))}
      </Stack>
    </List>
  );
};

export default SideBar;
