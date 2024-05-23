import {
  Center,
  Grid,
  GridItem,
  Image,
  Show,
  useColorMode,
} from "@chakra-ui/react";

import MarvelStudioIcon from "../../assets/icons/Marvel Studios.svg";
import SearchBar from "./SearchBar";
import ColorModeSwitch from "./ColorModeSwitch";
const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Grid
      templateAreas={{
        base: `"logo"`,
        md: `"logo search colormode"`,
      }}
      templateColumns={{ base: "1fr", md: "12rem 1fr 12rem" }}
      mb="1rem"
      borderRadius={16}
      borderWidth="1px"
      bgColor={colorMode === "dark" ? "gray.900" : "white"}
    >
      <GridItem area="logo">
        <Center>
          <Image
            padding={6}
            src={MarvelStudioIcon}
            alt="marvel-studio"
            sx={{
              filter: colorMode === "dark" ? "invert(50%)" : "inherit",
            }}
          />
        </Center>
      </GridItem>
      <Show above="md">
        <GridItem area="search" alignContent="center" padding={4}>
          <SearchBar />
        </GridItem>
      </Show>
      <Show above="md">
        <GridItem area="colormode" alignContent="center" padding={4}>
          <ColorModeSwitch />
        </GridItem>
      </Show>
    </Grid>
  );
};

export default Header;
