import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

// Define types for the field and the props
interface Field {
  name: string;
  label: string;
}

interface CustomFormProps {
  fields: Field[];
  onSubmit: (values: Record<string, string>) => void;
  buttonText: string;
}

const CustomForm: React.FC<CustomFormProps> = ({ fields, onSubmit, buttonText }) => {
  // Initialize formValues state with an empty string for each field
  const [formValues, setFormValues] = useState<Record<string, string>>(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );

  // Handle input field changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        marginTop: 8,
        border: '1px solid #ddd', // Add border
        borderRadius: '8px', // Rounded corners
        padding: 3 // Add padding
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        {buttonText}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: '100%', mt: 1 }}
      >
        {fields.map((field) => (
          <TextField
            key={field.name}
            label={field.label}
            variant="outlined"
            fullWidth
            margin="normal"
            name={field.name}
            value={formValues[field.name] || ''}
            onChange={handleChange}
          />
        ))}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          {buttonText}
        </Button>
      </Box>
    </Container>
  );
};

export default CustomForm;
