import { Grid, GridItem, Show } from "@chakra-ui/react";
import Header from "./components/Header/Header";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "content"`,
        md: `"nav nav" "sidebar content"`,
      }}
      gridTemplateColumns={{ base: "1fr", md: "18rem 1fr" }}
    >
      <GridItem backgroundColor="orange.300" area="nav">
        <Header />
      </GridItem>

      <Show above="md">
        <GridItem backgroundColor="yellow.300" area="sidebar">
          SideBar
        </GridItem>
      </Show>

      <GridItem backgroundColor="pink.300" area="content">
        Content
      </GridItem>
    </Grid>
  );
}

export default App;
