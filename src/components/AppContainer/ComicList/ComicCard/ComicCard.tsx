import { Card, Image } from "@chakra-ui/react";

const ComicCard = () => {
  return (
    <Card
      width="12rem"
      height="18rem"
      margin={2}
      overflow="hidden"
      boxShadow="lg"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: "scale(1.3)" }}
    >
      <Image
        src="https://i.annihil.us/u/prod/marvel/i/mg/c/f0/5df3fc8b3c883.jpg"
        alt="Green double couch with wooden legs"
      />
    </Card>
  );
};

export default ComicCard;
