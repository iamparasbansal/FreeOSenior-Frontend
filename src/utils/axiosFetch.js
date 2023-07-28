const axios = require("axios");
let access_token =
  (typeof window !== 'undefined') ? (localStorage.getItem("Authorization") ||
    window.localStorage.getItem("Authorization")) : null

let token = JSON.parse(access_token)?.token;
console.log(token);
const axiosFetch  = axios.default.create({
  baseURL: "https://freeoseniorbackend.onrender.com",
  headers: {
    Authorization: `Bearer ${token}`,
  }
});

export default axiosFetch;
