/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { axiosInstanceKeyless } from "@/utils/axiosInstance";

export const fetchProducts = async () => {
  const response = await axiosInstanceKeyless.get("/products")
  return response.data
}

export const fetchProductById = async (id) => {
  const response = await axiosInstanceKeyless.get(`/products/${id}`)
  return response.data
}
