import { Link, List, ListIcon, ListItem, Stack } from "@chakra-ui/react";

import { sidebarFilters } from "../../fixtures/sidebarFilters";
import { useContext } from "react";
import ComicFilterContext from "../../contexts/ComicFilterContext";

const SideBar = () => {
  const comicFilterContext = useContext(ComicFilterContext);

  if (!comicFilterContext)
    throw new Error("SideBar should be used with ComicFilterContext");

  return (
    <List spacing={3} fontSize="xl" bgColor="white" p={2} borderRadius="lg">
      <Stack>
        {sidebarFilters.map((filter) => (
          <ListItem
            as={Link}
            key={filter.query}
            p={2}
            onClick={() => comicFilterContext.updateAppliedFilter({format: filter.query})}
            fontWeight={comicFilterContext?.appliedFilter?.format === filter.query ? 600 : "default"}
          >
            <ListIcon as={filter.icon} color="red.500" />{filter.name}
          </ListItem>
        ))}
      </Stack>
    </List>
  );
};

export default SideBar;
