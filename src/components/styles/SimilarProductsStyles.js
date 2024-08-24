// SimilarProductsStyles.js
import styled from "styled-components";

export const SimilarProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  gap: 2rem;
  padding: 25px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const SimilarProductsWrapper = styled.div`
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: #f9f9f9;
  gap: 3rem;
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
`;

export const SimilarProductsHeading = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
  position: relative;
`;

export const SwiperCustomPagination = styled.div`
  .swiper-pagination-bullet {
    background: #ddd;
    width: 12px;
    height: 12px;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #007bff;
  }
`;

export const SwiperCustomNavigation = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    color: #007bff;
    background-color: #fff;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;
