import { Grid, GridItem } from "@chakra-ui/react";
import useComics from "../../../hooks/useComics";
import ComicCard from "./ComicCard/ComicCard";
import ComicCardsShimmer from "./ComicCard/ComicCardsShimmer";
import InfiniteScroll from "react-infinite-scroll-component";

const ComicList = () => {
  const { isLoading, data, fetchNextPage, hasNextPage } = useComics();

  if (isLoading) return <ComicCardsShimmer />;

  const fetchedComicsCount =
    data?.pages.reduce(
      (total, currentValue) => total + currentValue.data.results.length,
      0
    ) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedComicsCount} //This is important field to render the next data
      next={() => {
        console.log("LOGS: NEXT PAGE", fetchedComicsCount);
        fetchNextPage();
      }}
      hasMore={!!hasNextPage}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      scrollableTarget="scrollable-comic-list"
    >
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
    </InfiniteScroll>
  );
};

export default ComicList;
