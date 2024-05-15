import {
  MdFilter1,
  MdFilter2,
  MdFilter3,
  MdFilter4,
  MdFilter5,
  MdFilter6,
  MdFilter7,
  MdFilter8,
} from "react-icons/md";
import { SidebarFilter } from "../interfaces/sidebarFilter.interface";

export const sidebarFilters: SidebarFilter[] = [
  {
    icon: MdFilter1,
    name: "Comic",
    query: "comic",
  },
  {
    icon: MdFilter2,
    name: "Magazine",
    query: "magazine",
  },
  {
    icon: MdFilter3,
    name: "Trade Paperback",
    query: "trade paperback",
  },
  {
    icon: MdFilter4,
    name: "Hardcover",
    query: "hardcover",
  },
  {
    icon: MdFilter5,
    name: "Digest",
    query: "digest",
  },
  {
    icon: MdFilter6,
    name: "Graphic Novel",
    query: "graphic novel",
  },
  {
    icon: MdFilter7,
    name: "Digital Comic",
    query: "digital comic",
  },
  {
    icon: MdFilter8,
    name: "Infinite Comic",
    query: "infinite comic",
  },
];
