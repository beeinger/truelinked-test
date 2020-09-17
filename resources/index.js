import axios from "axios";
import useInfiniteScroll from "./useInfiniteScroll";

const API = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
});

export { API, useInfiniteScroll };
