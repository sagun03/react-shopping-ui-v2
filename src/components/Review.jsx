/* eslint-disable no-multi-spaces */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Typography,
  Rating,
  LinearProgress,
  Avatar,
} from "@mui/material";
import * as React from "react";

const StyledList = styled(List)(() => ({
  width: "100%",
  maxWidth: 200,
}));

const Review = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [ratingCounts, setRatingCounts] = useState([0, 0, 0, 0, 0]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await fetchReviews(productId);
        setReviews(data);

        // Calculate average rating
        const totalRating = data.reduce((acc, review) => acc + review.rating, 0);
        setAverageRating(data.length ? totalRating / data.length : 0);

        // Calculate rating counts
        const counts = [0, 0, 0, 0, 0];
        data.forEach((review) => {
          counts[5 - Math.round(review.rating)]++;
        });
        setRatingCounts(counts);
      } catch (error) {
        setError("Failed to fetch reviews");
        console.error("Failed to fetch reviews:", error);
      }
    };
    loadReviews();
  }, [productId]);

  const getRatingLabel = (rating) => {
    if (rating >= 4.5) return "Best";
    if (rating >= 3.5) return "Good";
    if (rating >= 2.5) return "Average";
    return "Bad";
  };

  return (
    <React.Fragment>
      <Typography variant="h9" gutterBottom>
        Date: {order?.date}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Customer Reviews
      </Typography>
      {reviews.length > 0 ? (
        <>
          <OverallRating>
            Overall Rating: {averageRating.toFixed(1)}
            <Rating value={averageRating} precision={0.1} readOnly sx={{ ml: 1 }} />
            <RatingLabel>{getRatingLabel(averageRating)}</RatingLabel>
          </OverallRating>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Divider orientation="vertical" flexItem />
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
          </Box>
        </>
      ) : (
        <Typography variant="body1" style={{ padding: "10px" }}>
          No reviews yet. Be the first to review this product!
        </Typography>
      )}
      {reviews.map((review, index) => (
        <Box key={index} sx={{ mt: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar src={review.photoUrl} alt={review.name} />
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
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
                {review.name} • {new Date(review.createdAt).toLocaleDateString()}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
            {review.description}
          </Typography>
          <Divider sx={{ mt: 2 }} />
        </Box>
      ))}
    </Box>
  );
};

export default Review;
