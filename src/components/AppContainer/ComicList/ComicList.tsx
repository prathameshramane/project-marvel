import { Grid, GridItem } from "@chakra-ui/react";
import useComics from "../../../hooks/useComics";
import ComicCard from "./ComicCard/ComicCard";

const ComicList = () => {
  const { isLoading, data, error } = useComics();
  const comics = data?.data?.results.filter(
    (card) => !card.thumbnail.path.includes("image_not_available")
  );

  if (isLoading) return null;

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)"
      }}
      height="100%"
    >
      {comics?.map((comic) => (
        <GridItem key={comic.id}>
          <ComicCard comic={comic} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ComicList;
