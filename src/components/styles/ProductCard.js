/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: '1rem',
  transition: '0.3s',
  '&:hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
});

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="140"
        image={product.images[0]}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          Rs. {product.price}
        </Typography>
        <Button size="small" color="primary" onClick={handleClick}>
          View Details
        </Button>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
