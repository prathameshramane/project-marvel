import Comic from "../interfaces/Comics.interface";
import useData from "./useData";

const useComics = () => useData<Comic>("/comics", { formatType: "comic" });

export default useComics;
