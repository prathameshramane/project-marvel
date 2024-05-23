export default interface MarvelClientResponse<T> {
  code: number;
  status: string;
  data: MarvelClientData<T>;
}

export interface MarvelClientData<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
}
