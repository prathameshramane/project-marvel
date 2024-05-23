import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import Comic from "../interfaces/Comics.interface";
import ComicFilterContext from "../contexts/ComicFilterContext";
import { DEFAULT_FORMAT_TYPE } from "../constants/marvelClient.constants";
import marvelClient from "../utils/marvelClient";
import MarvelClientResponse from "../interfaces/MarvelClientResponse.interface";

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

  return useQuery<MarvelClientResponse<Comic>>({
    queryKey: queryParams ? ["comics", queryParams] : ["comics"],
    queryFn: () =>
      marvelClient
        .get<MarvelClientResponse<Comic>>("/comics", { params: queryParams })
        .then((res) => res.data),
    staleTime: ms("24h"),
  });
};

export default useComics;
