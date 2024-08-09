import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

// Define the types for the props
interface NavbarProps {
  userName?: string;
  onSignUp: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ userName='', onSignUp, onLogout }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {userName ? `Welcome, ${userName}` : "Welcome, Guest"}
        </Typography>
        {!userName && (
          <Button color="inherit" onClick={onSignUp}>
            Sign Up
          </Button>
        )}
        {userName && (
          <Button color="inherit" onClick={onLogout} sx={{ ml: 2 }}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
