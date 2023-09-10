import axios from "axios"

export const apiService = axios.create({
  baseURL: "https://testereactgolang.onrender.com/api/v1", // A URL do seu servidor
})
