import { Card, Center, Image, Text } from "@chakra-ui/react";
import Comic from "../../../../interfaces/Comics.interface";

interface Props {
  comic: Comic;
}

const ComicCard = ({ comic }: Props) => {
  return (
    <Card
      margin={2}
      overflow="hidden"
      boxShadow="lg"
      transition="transform 0.3s ease-in-out"
      _hover={{ zIndex: 10, transform: "scale(1.3)" }}
      height="28rem"
    >
      <Image
        src={comic.thumbnail.path + "." + comic.thumbnail.extension}
        alt={comic.title}
        objectFit="cover"
        boxSize="inherit"
      />
      <Center
        position="absolute"
        opacity="0"
        background="#00000059"
        width="100%"
        height="100%"
        transition="transform 0.5s ease-in-out"
        padding={4}
        _hover={{ opacity: "1" }}
      >
        <Text
          textColor="white"
          fontSize="2xl"
          fontWeight="semibold"
          textAlign="center"
        >
          {comic.title}
        </Text>
      </Center>
    </Card>
  );
};

export default ComicCard;
