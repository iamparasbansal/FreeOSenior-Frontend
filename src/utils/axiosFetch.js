const axios = require("axios")
let access_token =
  (typeof window !== 'undefined') ? (localStorage.getItem("Authorization") ||
    window.localStorage.getItem("Authorization")) : null

let token = JSON.parse(access_token)?.token;
module.exports = axios.default.create({
  baseURL: "https://free-o-senior.herokuapp.com",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  
  mode: "cors",
})