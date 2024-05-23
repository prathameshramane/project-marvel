import { Button, Grid, GridItem } from "@chakra-ui/react";
import useComics from "../../../hooks/useComics";
import ComicCard from "./ComicCard/ComicCard";
import ComicCardsShimmer from "./ComicCard/ComicCardsShimmer";

const ComicList = () => {
  const { isLoading, data, isFetchingNextPage, fetchNextPage } = useComics();

  if (isLoading) return <ComicCardsShimmer />;

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
      height="100%"
    >
      {data?.pages.map((page) =>
        page.data.results?.map((comic) => (
          <GridItem key={comic.id}>
            <ComicCard comic={comic} />
          </GridItem>
        ))
      )}
    </Grid>
  );
};

export default ComicList;
