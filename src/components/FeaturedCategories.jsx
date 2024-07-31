import React from "react";
import RightFeaturedCategorySection from "./RightFeaturedCategorySection";
import LeftFeaturedCategorySection from "./LeftFeaturedCategorySection";
import { CategoryWrapper, LeftContainer, RightContainer, HeadingContainer, EffectCardHeading } from "./styles/FeaturedCategories";

const FeaturedCategories = () => {
  return (
    <>
      <HeadingContainer>
        <EffectCardHeading>Featured Categories</EffectCardHeading>
      </HeadingContainer>
      <CategoryWrapper data-test-id="CategoryWrapper">
        <LeftContainer>
          <LeftFeaturedCategorySection />
        </LeftContainer>
        <RightContainer>
          <RightFeaturedCategorySection />
        </RightContainer>
      </CategoryWrapper>
    </>
  );
};

export default FeaturedCategories;
