import { Container, Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import AppContainer from "./components/AppContainer/AppContainer";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "content"`,
        md: `"nav nav" "sidebar content"`,
      }}
      gridTemplateColumns={{ base: "1fr", md: "18rem 1fr" }}
      backgroundColor="gray.50"
      px={"1rem"}
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
