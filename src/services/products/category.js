/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axiosInstance from "@/utils/axiosInstance";

export const fetchCategories = async () => {
  const response = await axiosInstance.get("/categories")
  return response.data
}
