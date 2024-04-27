import { createContext } from "react";

export interface ComicFilterState {
  appliedFilter: string | null;
  updateAppliedFilter: (filter: string) => void;
}

const ComicFilterContext = createContext<ComicFilterState | null>(null);

export default ComicFilterContext;
