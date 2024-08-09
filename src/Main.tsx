import React from "react";
import Navbar from "./Navbar";
import { Box, Button, Typography, Container } from "@mui/material";

type User = {
  username: string;
  role: string;
};

type MainProps = {
  user: User;
  logout: () => void;
  signup: () => void;
  children?: React.ReactNode;
};

// Footer Component
function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", py: 3, mt: "auto" }}>
      <Container maxWidth="lg">
        <Typography variant="body1" color="inherit">
          © {new Date().getFullYear()} USM. All rights reserved.
        </Typography>
        <Button href="/privacy-policy" sx={{ color: "inherit", ml: 2 }}>
          Privacy Policy
        </Button>
      </Container>
    </Box>
  );
}

const Main: React.FC<MainProps> = ({
  user = {},
  logout,
  signup,
  children,
}) => {
  return (
    <>
      <Navbar userName={user?.username} onLogout={logout} onSignUp={signup} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Main;
