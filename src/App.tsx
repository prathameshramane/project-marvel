import { Grid, GridItem, Show, useColorMode } from "@chakra-ui/react";

import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import AppContainer from "./components/AppContainer/AppContainer";

function App() {
  const { colorMode } = useColorMode();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "content"`,
        md: `"nav nav" "sidebar content"`,
      }}
      gridTemplateColumns={{ base: "1fr", md: "18rem 1fr" }}
      backgroundColor={colorMode === "dark" ? "blackAlpha.800" : "gray.50"}
      p="1rem"
    >
      <GridItem area="nav">
        <Header />
      </GridItem>

      <Show above="md">
        <GridItem area="sidebar">
          <SideBar />
        </GridItem>
      </Show>

      <GridItem area="content">
        <AppContainer />
      </GridItem>
    </Grid>
  );
}

export default App;
