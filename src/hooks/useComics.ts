import { useContext } from "react";
import Comic from "../interfaces/Comics.interface";
import useData from "./useData";
import ComicFilterContext from "../contexts/ComicFilterContext";
import { DEFAULT_FORMAT_TYPE } from "../constants/marvelClient.constants";

export interface ComicQueryParams {
  format: string;
  orderBy: string;
  dateDescriptor?: string;
  titleStartsWith?: string;
}

const useComics = () => {
  const comicFilter = useContext(ComicFilterContext);
  let queryParams: ComicQueryParams = {
    format: comicFilter?.appliedFilter?.format ?? DEFAULT_FORMAT_TYPE,
    orderBy: comicFilter?.appliedFilter?.orderBy ?? "",
  };

  if (
    comicFilter?.appliedFilter?.titleStartsWith &&
    comicFilter.appliedFilter.titleStartsWith.length > 0
  ) {
    queryParams.titleStartsWith = comicFilter.appliedFilter.titleStartsWith;
  }

  if (
    comicFilter?.appliedFilter?.dateDescriptor &&
    comicFilter.appliedFilter.dateDescriptor.length > 0
  ) {
    queryParams.dateDescriptor = comicFilter.appliedFilter.dateDescriptor;
  }

  return useData<Comic>(
    "/comics",
    queryParams,
    (comicFilter && [comicFilter.appliedFilter]) || []
  );
};

export default useComics;
