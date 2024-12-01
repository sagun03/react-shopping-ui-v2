import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  BannerContainer,
  BannerImage,
  BannerWrapper,
  Container,
  HorizontalScrollingItems,
  HorizontalScrollingItem,
  DialogOverlay,
  DialogBox,
  ShopNowButton
} from "./styles/banner";
import { useInView } from "react-intersection-observer";
import useCoupenConfetti from "../hooks/useCoupenConfetti";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const banners = useSelector((state) => state.promotions.banners) || [];
  const [isCopied, setIsCopied] = useState(false);
  const { title = "", imageUrl = "", couponCode = "" } = banners[0] || {};
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleCloseDialog = () => {
    setIsOpen(false);
    setIsCopied(false);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleBannerClick = () => {
    navigator.clipboard
      .writeText(couponCode)
      .then(() => {
        setIsCopied(true);
        setIsOpen(true);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const handleShopNow = () => {
    navigate("/products");
    setIsOpen(false);
    setIsCopied(false);
  };

  useCoupenConfetti(isCopied);

  return (
    <BannerWrapper>
      <Container>
        <HorizontalScrollingItems>
          <HorizontalScrollingItem>
            🎉 Discount! 🎉 Grab the offer now! 🎉 Discount! 🎉 Grab the offer
            now!&nbsp;
          </HorizontalScrollingItem>
          <HorizontalScrollingItem>
            🎉 Discount! 🎉 Grab the offer now! 🎉 Discount! 🎉 Grab the offer
            now!&nbsp;
          </HorizontalScrollingItem>
        </HorizontalScrollingItems>
      </Container>

      <BannerContainer ref={ref} onClick={handleBannerClick}>
        <BannerImage src={imageUrl} alt={title} />
      </BannerContainer>
      <DialogOverlay isOpen={isOpen} onClick={handleCloseDialog}>
        <DialogBox onClick={(e) => e.stopPropagation()}>
          <h2>Coupon Code Copied!</h2>
          <p>Your coupon code has been copied to your clipboard.</p>
          <ShopNowButton onClick={handleShopNow}>Shop Now</ShopNowButton>
        </DialogBox>
      </DialogOverlay>
    </BannerWrapper>
  );
};

export default Banner;
