import {
  Center,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import ComicFilterContext from "../../contexts/ComicFilterContext";

const SearchBar = () => {
  const [searchFor, setSearchFor] = useState<string>("");
  const comicFilterContext = useContext(ComicFilterContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch();
    }, 500);
    return () => clearTimeout(timer);
  }, [searchFor]);

  const handleSearch = () => {
    comicFilterContext?.updateAppliedFilter({ titleStartsWith: searchFor });
  };

  return (
    <Center>
      <InputGroup maxWidth="48rem">
        <InputLeftAddon>
          <Icon as={FaSearch} />
        </InputLeftAddon>
        <Input
          placeholder="Search your favorite comic"
          size="md"
          onChange={(e) => setSearchFor(e.target.value)}
        />
      </InputGroup>
    </Center>
  );
};

export default SearchBar;
