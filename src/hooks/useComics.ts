import { useContext } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";

import Comic from "../interfaces/Comics.interface";
import ComicFilterContext from "../contexts/ComicFilterContext";
import { DEFAULT_FORMAT_TYPE } from "../constants/marvelClient.constants";
import marvelClient from "../utils/marvelClient";
import MarvelClientResponse from "../interfaces/MarvelClientResponse.interface";

const PAGE_SIZE = 20;

export interface ComicQueryParams {
  format: string;
  orderBy: string;
  dateDescriptor?: string;
  titleStartsWith?: string;
}

const parseThumbnailImages = (comics: Comic[]): Comic[] => {
  return comics.map((card) => {
    if (card.thumbnail.path.includes("image_not_available")) {
      card.thumbnail.path = "No Preview";
    }
    return card;
  });
};

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

  return useInfiniteQuery<MarvelClientResponse<Comic>>({
    queryKey: queryParams ? ["comics", queryParams] : ["comics"],
    queryFn: ({ pageParam }) =>
      marvelClient
        .get<MarvelClientResponse<Comic>>("/comics", {
          params: { offset: pageParam, ...queryParams },
        })
        .then((res) => {
          res.data.data.results = parseThumbnailImages(res.data.data.results);
          return res.data;
        }),
    staleTime: ms("24h"),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const hasNextPage =
        lastPage.data.offset + PAGE_SIZE < lastPage.data.total;
      return hasNextPage ? lastPage.data.offset + PAGE_SIZE : null;
    },
  });
};

export default useComics;
