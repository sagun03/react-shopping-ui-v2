import React from "react";
import RightFeaturedCategorySection from "./right/Index";
import LeftFeaturedCategorySection from "./left/Index";
import { CategoryWrapper, LeftContainer, RightContainer, HeadingContainer, EffectCardHeading } from "./styles";

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
