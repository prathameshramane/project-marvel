import { useContext } from "react";
import Comic from "../interfaces/Comics.interface";
import useData from "./useData";
import ComicFilterContext from "../contexts/ComicFilterContext";
import { DEFAULT_FORMAT_TYPE } from "../constants/marvelClient.constants";

const useComics = () => {
  const comicFilter = useContext(ComicFilterContext);
  return useData<Comic>(
    "/comics",
    {
      format: comicFilter?.appliedFilter?.format ?? DEFAULT_FORMAT_TYPE,
      orderBy: comicFilter?.appliedFilter?.orderBy ?? "",
    },
    (comicFilter && [comicFilter.appliedFilter]) || []
  );
};

export default useComics;
