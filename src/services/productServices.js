/* eslint-disable @typescript-eslint/explicit-function-return-type */
import apiClient from "../api/client"

export const fetchProducts = async () => {
  const response = await apiClient.get("/products")
  return response.data
}

export const fetchProductById = async (id) => {
  const response = await apiClient.get(`/products/${id}`)
  return response.data
}
