import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export interface ComicFilter {
  format?: string;
  dateDescriptor?: string;
  titleStartsWith?: string;
  orderBy?: string;
}

interface ComicFilterStore {
  filters: ComicFilter;
  setFormat: (format?: string) => void;
  setDateDescriptor: (dateDescriptor?: string) => void;
  setTitleStartsWith: (titleStartsWith?: string) => void;
  setOrderBy: (orderBy?: string) => void;
}

const useComicFilterStore = create<ComicFilterStore>((set) => ({
  filters: {},
  setFormat: (format?: string) =>
    set((state) => ({ filters: { ...state.filters, format } })),
  setDateDescriptor: (dateDescriptor?: string) =>
    set((state) => ({ filters: { ...state.filters, dateDescriptor } })),
  setTitleStartsWith: (titleStartsWith?: string) =>
    set((state) => ({ filters: { ...state.filters, titleStartsWith } })),
  setOrderBy: (orderBy?: string) =>
    set((state) => ({ filters: { ...state.filters, orderBy } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Comic Filter Store", useComicFilterStore);

export default useComicFilterStore;
