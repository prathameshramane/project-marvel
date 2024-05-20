import { createContext } from "react";

export interface AppliedFilter {
  format?: string;
  dateDescriptor?: string;
  titleStartsWith?: string;
  orderBy?: string;
}

export interface ComicFilterState {
  appliedFilter: AppliedFilter | null;
  updateAppliedFilter: (filter: AppliedFilter) => void;
}

const ComicFilterContext = createContext<ComicFilterState | null>(null);

export default ComicFilterContext;
