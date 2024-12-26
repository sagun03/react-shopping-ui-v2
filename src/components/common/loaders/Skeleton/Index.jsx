/* eslint-disable react/prop-types */
import { Box, Skeleton } from "@mui/material";

const SkeletonLoader = ({ count = 1, type = "rectangle", height = 100, width = "100%", skeletonProps = {} }) => {
  return (
        <Box>
            {Array.from({ length: count }).map((_, index) => (
                <Box key={index} sx={{ marginBottom: 2 }}>
                    {type === "rectangle" ? (
                        <Skeleton variant="rectangular" height={height} width={width} {...skeletonProps} />
                    ) : (
                        <Skeleton variant="text" width={width} {...skeletonProps} />
                    )}
                    {/* If you want to add text skeletons, you can add them here */}
                    {skeletonProps.text && (
                        <>
                            <Skeleton variant="text" width={skeletonProps.textWidth1 || "60%"} {...skeletonProps} />
                            <Skeleton variant="text" width={skeletonProps.textWidth2 || "40%"} {...skeletonProps} />
                        </>
                    )}
                </Box>
            ))}
        </Box>
  );
};

export default SkeletonLoader;
