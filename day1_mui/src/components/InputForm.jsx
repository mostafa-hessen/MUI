import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function InputForm({ onSubmit }) {
  const [name, setName] = useState('');

  return (
    <Box sx={{ padding: 2 }}>
      <TextField
        label="Your Name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={() => onSubmit(name)}>
        Submit
      </Button>
    </Box>
  );
}