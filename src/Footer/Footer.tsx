import React from 'react';
import { Box, Container, Typography } from '@mui/material';

// Define the Footer component
interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#e0f7fa", // Cool light color
        py: 2,
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            px: 1,
          }}
        >
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
