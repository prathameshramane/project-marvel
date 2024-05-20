import { useEffect, useState } from "react";
import marvelClient from "../utils/marvelClient";
import MarvelClientResponse from "../interfaces/MarvelClientResponse.interface";
import { ComicQueryParams } from "./useComics";

const useData = <T>(url: string, params?: ComicQueryParams, dependencies?: any[]) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<MarvelClientResponse<T> | null>(null);
  const [data, setData] = useState<MarvelClientResponse<T> | null>(null);

  useEffect(
    () => {
      fetchData();
    },
    dependencies ? [...dependencies] : []
  );

  const fetchData = () => {
    let configs = {};
    if (params) configs = { ...configs, params };

    setIsLoading(true);
    marvelClient
      .get<MarvelClientResponse<T>>(url, configs)
      .then((res) => setData(res.data))
      .catch((error) => setError(error.data))
      .finally(() => setIsLoading(false));
  };

  return { isLoading, error, data };
};

export default useData;
