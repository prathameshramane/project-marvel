import { Box, Show } from "@chakra-ui/react";
import ComicList from "./ComicList/ComicList";
import TopBar from "./TopBar/TopBar";

const AppContainer = () => {
  return (
    <>
      <Show above="md">
        <TopBar />
      </Show>
      <Box
        pl="1rem"
        overflowY="scroll"
        height="75vh"
        css={{
          "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar for Chrome, Safari, and Opera
          },
          scrollbarWidth: "none", // Hide scrollbar for Firefox
        }}
        id="scrollable-comic-list"
      >
        <ComicList />
      </Box>
    </>
  );
};

export default AppContainer;
