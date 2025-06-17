import { Card, CardContent, Typography, Button } from '@mui/material';

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', mt: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Product Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a description of the product.
        </Typography>
        <Button sx={{ mt: 2 }} variant="contained">
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
}