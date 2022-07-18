import axios from "axios";

const BASE_URL = "https://gallery-app.riturajrajput.repl.co/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
