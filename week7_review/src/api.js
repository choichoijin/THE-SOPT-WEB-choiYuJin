import axios from "axios";

export const api = axios.create({
  baseURL: "https://sopt-letter.herokuapp.com",
});
