import {
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  useColorMode,
} from "@chakra-ui/react";

import { sidebarFilters } from "../../fixtures/sidebarFilters";
import useComicFilterStore from "../../hooks/useComicsFilterStore";

const SideBar = () => {
  const setFormat = useComicFilterStore((state) => state.setFormat);
  const format = useComicFilterStore((state) => state.filters.format);
  const { colorMode } = useColorMode();

  return (
    <List
      spacing={3}
      fontSize="xl"
      bgColor={colorMode === "dark" ? "gray.900" : "white"}
      p={2}
      borderRadius="lg"
    >
      <Stack>
        {sidebarFilters.map((filter) => (
          <ListItem
            as={Link}
            key={filter.query}
            p={2}
            onClick={() => {
              setFormat(filter.query);
              // comicFilterContext.updateAppliedFilter({ format: filter.query });
            }}
            fontWeight={format === filter.query ? 600 : "default"}
          >
            <ListIcon as={filter.icon} color="red.500" />
            {filter.name}
          </ListItem>
        ))}
      </Stack>
    </List>
  );
};

export default SideBar;
