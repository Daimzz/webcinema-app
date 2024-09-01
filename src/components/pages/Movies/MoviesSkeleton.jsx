import { Box, Skeleton, Stack, useMediaQuery } from '@mui/material';
import React from 'react';

export default function MoviesSkeleton() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box mt={2} mb={2}>
      {new Array(5).fill(null).map((_, index) => (
        <React.Fragment key={index} sx={{ mb: 2 }}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            height="32px"
            width="200px"
            sx={{ mx: 1, my: 1 }}
          />
          <Stack direction="row" justifyContent="center" flexWrap="wrap">
            {new Array(5).fill(null).map((_, index) => (
              <Skeleton
                key={index}
                animation="wave"
                variant="rectangular"
                sx={{ mx: 1, my: 1 }}
                height={isMobile ? '520px' : '352px'}
                width={isMobile ? '100%' : '18%'}
              />
            ))}
          </Stack>
        </React.Fragment>
      ))}
    </Box>
  );
}
