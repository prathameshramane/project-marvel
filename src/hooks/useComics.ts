import { useContext } from "react";
import Comic from "../interfaces/Comics.interface";
import useData from "./useData";
import ComicFilterContext from "../contexts/ComicFilterContext";
import { DEFAULT_FORMAT_TYPE } from "../constants/marvelClient.constants";

const useComics = () => {
  const comicFilter = useContext(ComicFilterContext);
  return useData<Comic>(
    "/comics",
    { format: comicFilter?.appliedFilter ?? DEFAULT_FORMAT_TYPE },
    (comicFilter && [comicFilter.appliedFilter]) || []
  );
};

export default useComics;
