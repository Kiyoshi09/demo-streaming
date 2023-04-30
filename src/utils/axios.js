import axios from "axios";

export const instance = axios.create({
  method: "get",
  baseURL: "https://api.themoviedb.org/3",
  crossDomain: true
});
