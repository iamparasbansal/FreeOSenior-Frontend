const axios = require("axios")
let access_token =
  (typeof window !== 'undefined') ? (localStorage.getItem("Authorization") ||
    window.localStorage.getItem("Authorization")) : null

module.exports = axios.default.create({
  baseURL: "https://api.freeosenior.in/api/v1",
  headers: {
    'Authorization': `Bearer ${access_token}`,
  },
  origin: true,
  mode: 'cors'
})