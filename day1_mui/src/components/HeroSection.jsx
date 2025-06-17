import { Typography, Button } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function HeroSection() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Our Website <AcUnitIcon fontSize="large" />
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </div>
  );
}