/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Typography,
  Rating,
  LinearProgress,
  Avatar
} from "@mui/material";
import {
  ReviewContainer,
  RatingSection,
  RatingBreakdown,
  StyledList,
  StyledListItem
} from "../components/styles/Review";
import { useReviews } from "../hooks/useReview";

const Review = ({ productId }) => {
  console.log("productId", productId);
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [ratingCounts, setRatingCounts] = useState([0, 0, 0, 0, 0]);
  const {
    data: reviewData,
    isLoading: isReviewsLoading,
    isError
  } = useReviews(productId);
  console.log(reviewData, "reviewData");
  useEffect(() => {
    if (reviewData?.length > 0) {
      setReviews(reviewData);
      const totalRating = reviewData.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      setAverageRating(reviewData.length ? totalRating / reviewData.length : 0);

      const counts = [0, 0, 0, 0, 0];
      reviewData.forEach((review) => {
        counts[5 - Math.round(review.rating)]++;
      });
      setRatingCounts(counts);
    }
  }, [reviewData]);

  const getRatingLabel = (rating) => {
    if (rating >= 4.5) return "Best";
    if (rating >= 3.5) return "Good";
    if (rating >= 2.5) return "Average";
    return "Bad";
  };

  if (isError) {
    return (
      <ReviewContainer>
        <Typography variant="body1" sx={{ padding: "10px" }}>
          Error loading reviews
        </Typography>
      </ReviewContainer>
    );
  }

  return (
    <ReviewContainer>
      <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
        Customer Reviews
      </Typography>
      {reviews.length > 0 ? (
        <>
          <RatingSection>
            <Typography variant="h5">
              Overall Rating: {averageRating.toFixed(1)}
            </Typography>
            <Rating
              value={averageRating}
              precision={0.1}
              readOnly
              sx={{ ml: 1 }}
            />
            <Typography variant="h6" sx={{ ml: 1 }}>
              {getRatingLabel(averageRating)}
            </Typography>
          </RatingSection>
          <Divider sx={{ my: 2 }} />
          <RatingBreakdown>
            {ratingCounts.map((count, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2">{5 - index} star</Typography>
                <LinearProgress
                  variant="determinate"
                  value={(count / reviews.length) * 100}
                  sx={{ mx: 1, flex: 1 }}
                />
                <Typography variant="body2">{count}</Typography>
              </Box>
            ))}
          </RatingBreakdown>
        </>
      ) : isReviewsLoading ? (
        <Typography variant="body1" sx={{ padding: "10px" }}>
         Loading reviews...
        </Typography>
      ) : (
        <Typography variant="body1" sx={{ padding: "10px" }}>
          No reviews yet. Be the first to review this product!
        </Typography>
      )}
      <StyledList>
        {reviews.map((review, index) => (
          <StyledListItem key={index}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar src={review.photoUrl} alt={review.name} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start"
                }}
              >
                <Typography variant="body1">{review.title}</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  {review.rating.toFixed(1)}
                  <Rating
                    value={review.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                    sx={{ ml: 0.5 }}
                  />
                </Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "bold", mt: 0.5 }}
                >
                  {review.name} •{" "}
                  {new Date(review.createdAt).toLocaleDateString()}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}>
              {review.description}
            </Typography>
            <Divider sx={{ mt: 2 }} />
          </StyledListItem>
        ))}
      </StyledList>
    </ReviewContainer>
  );
};

export default Review;
