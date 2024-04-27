import { Grid, GridItem, Skeleton } from "@chakra-ui/react";

const ComicCardsShimmer = () => {
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
      gap="1rem"
    >
      {Array(20)
        .fill("")
        ?.map((item, index) => (
          <GridItem key={index}>
            <Skeleton height="28rem" />
          </GridItem>
        ))}
    </Grid>
  );
};

export default ComicCardsShimmer;
