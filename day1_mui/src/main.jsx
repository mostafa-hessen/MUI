import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline,Box,Grid, } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <App />
    <Box sx={{ boxShadow: 0 }}
    ></Box>
  <Box sx={{ boxShadow: 1, bgcolor: 'background.paper', p: 2, borderRadius: 1, margin: 2, fontSize: '1.2rem', color: 'text.primary' }}
    >1</Box>

      <Box sx={{ boxShadow: 5 }}
    >2</Box>

    <Grid container spacing={2}>
  <Grid size={8}>
    {/* <Item>size=8</Item> */}1
  </Grid>
  <Grid size={4}>
    {/* <Item>size=4</Item> */}2
    
  </Grid>
  <Grid size={4}>
    {/* <Item>size=4</Item> */}3
  </Grid>
  <Grid size={8}>
    {/* <Item>size=8</Item> */}
  </Grid>
</Grid>
  </React.StrictMode>
);