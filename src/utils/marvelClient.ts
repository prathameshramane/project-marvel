import axios from "axios";

const marvelClient = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public",
  params: {
    apikey: import.meta.env.VITE_MARVEL_API_KEY,
    ts: import.meta.env.VITE_MARVEL_TS,
    hash: import.meta.env.VITE_MARVEL_CLIENT_HASH,
  },
});

export default marvelClient;
