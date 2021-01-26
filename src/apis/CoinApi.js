import axios from "axios";

//this is so we don't keep typing the base url ==>
export default axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});
