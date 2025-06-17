import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Website
          <Typography 
          sx={{ display: 'inline-block', marginLeft: 2 }}
          variant="body1"  border="1px solid" 
          margin={2}
          borderRadius={1} bgcolor="blue.100"
          padding={0.3} fontWeight="bold"  fontSize="1.2rem"
          color="initial"align="left" 
          >w</Typography>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}