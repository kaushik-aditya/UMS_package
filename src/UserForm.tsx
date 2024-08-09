import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

// Define the type for the user object
interface User {
  name: string;
  role: string;
}

// Define the types for the props
interface UserFormProps {
  onSave: (user: User) => void;
  selectedUser?: User;
}

const UserForm: React.FC<UserFormProps> = ({ onSave, selectedUser }) => {
  const [formValues, setFormValues] = useState<User>({ name: '', role: '' });

  useEffect(() => {
    if (selectedUser) {
      setFormValues(selectedUser);
    } else {
      setFormValues({ name: '', role: '' });
    }
  }, [selectedUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(formValues);
    setFormValues({ name: '', role: '' }); // Clear form after submission
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Name"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Role"
        name="role"
        value={formValues.role}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </Box>
  );
};

export default UserForm;
