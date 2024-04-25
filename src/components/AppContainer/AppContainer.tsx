import { Box } from "@chakra-ui/react";
import ComicList from "./ComicList/ComicList";

const AppContainer = () => {
  return (
    <Box
      pl="1rem"
      overflowY="scroll"
      height="85vh"
      css={{
        "&::-webkit-scrollbar": {
          display: "none", // Hide scrollbar for Chrome, Safari, and Opera
        },
        scrollbarWidth: "none", // Hide scrollbar for Firefox
      }}
    >
      <ComicList />
    </Box>
  );
};

export default AppContainer;
