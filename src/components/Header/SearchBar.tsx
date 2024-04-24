import {
  Center,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <Center>
      <InputGroup maxWidth="48rem">
        <InputLeftAddon>
          <Icon as={FaSearch} />
        </InputLeftAddon>
        <Input placeholder="Search your favorite comic" size="md" />
      </InputGroup>
    </Center>
  );
};

export default SearchBar;
