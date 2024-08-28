/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { createContext, useContext, useState, useEffect } from "react"
import { useProducts } from "../hooks/useProducts"
import { useCategories } from "../hooks/useCategories"
import loaderGif from "../pages/images/loader.gif"
import { mockProducts } from "../utils/data"

const DataContext = createContext()

export const useDataContext = () => useContext(DataContext)

export const DataProvider = ({ children }) => {
  const { data: productsData, isLoading: isProductDataLoading, isError } = useProducts()
  const { data: categoriesData, isLoading: isCategoriesDataLoading } = useCategories()

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (categoriesData?.length > 0 && categories.length === 0) {
      setCategories(categoriesData)
    }
    if (productsData?.length > 0 && products.length === 0) {
      setProducts(productsData)
    }
  }, [categoriesData, productsData])

  useEffect(() => {
    const minLoadingTime = 500
    const loadingTimeout = setTimeout(() => {
      if (!isProductDataLoading && !isCategoriesDataLoading) {
        setIsLoading(false)
      }
    }, minLoadingTime)

    return () => clearTimeout(loadingTimeout)
  }, [isProductDataLoading, isCategoriesDataLoading])

  useEffect(() => {
    if (isError) {
      console.error("Error fetching data:", isError)
      setProducts(mockProducts)
    }
  }, [isError])

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <img src={loaderGif} alt="Loading..." />
      </div>
    )
  }

  return (
    <DataContext.Provider value={{ products }}>
      {children}
    </DataContext.Provider>
  )
}
