import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

// Define the types for the props
interface NavbarProps {
  userName: string;
  onAdd: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ userName, onAdd, onLogout }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Welcome, {userName}
        </Typography>
        <Button color="inherit" onClick={onAdd}>
          Add User
        </Button>
        <Button color="inherit" onClick={onLogout} sx={{ ml: 2 }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
