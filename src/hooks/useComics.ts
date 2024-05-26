import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";

import Comic from "../interfaces/Comics.interface";
import { DEFAULT_FORMAT_TYPE } from "../constants/marvelClient.constants";
import marvelClient from "../utils/marvelClient";
import MarvelClientResponse from "../interfaces/MarvelClientResponse.interface";
import useComicFilterStore from "./useComicsFilterStore";

const PAGE_SIZE = 20;

export interface ComicQueryParams {
  format: string;
  orderBy: string;
  dateDescriptor?: string;
  titleStartsWith?: string;
  offset?: number;
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
  const comicFilter = useComicFilterStore((state) => state.filters);
  let queryParams: ComicQueryParams = {
    format: comicFilter.format ?? DEFAULT_FORMAT_TYPE,
    orderBy: comicFilter.orderBy ?? "",
  };

  if (
    comicFilter.titleStartsWith &&
    comicFilter.titleStartsWith.length > 0
  ) {
    queryParams.titleStartsWith = comicFilter.titleStartsWith;
  }

  if (
    comicFilter.dateDescriptor &&
    comicFilter.dateDescriptor.length > 0
  ) {
    queryParams.dateDescriptor = comicFilter.dateDescriptor;
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
