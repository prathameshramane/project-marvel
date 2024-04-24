import { Center, Grid, GridItem, Image, Show } from "@chakra-ui/react";

import MarvelStudioIcon from "../../assets/icons/Marvel Studios.svg";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <Grid
      templateAreas={{
        base: `"logo"`,
        md: `"logo search"`,
      }}
      templateColumns={{ base: "1fr", md: "12rem 1fr" }}
      my="1rem"
      borderRadius={16}
      borderWidth="1px"
    >
      <GridItem area="logo">
        <Center>
          <Image padding={6} src={MarvelStudioIcon} alt="marvel-studio" />
        </Center>
      </GridItem>
      <Show above="md">
        <GridItem area="search" alignContent="center" padding={4}>
          <SearchBar />
        </GridItem>
      </Show>
    </Grid>
  );
};

export default Header;
