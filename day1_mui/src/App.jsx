import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InputForm from './components/InputForm';
import ProductCard from './components/ProductCard';
import FeedbackToast from './components/FeedbackToast';
import LoginModal from './components/LoginModal';
import ResponsiveAppBar from './components/appBar';
import { Avatar, Box, Drawer } from '@mui/material';

export default function App() {
  const [toastOpen, setToastOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleFormSubmit = (name) => {
    setToastOpen(true);
    console.log("Submitted name:", name);
  };

  return (
    <>
    {/* mui-box */}
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
           <Box

        component="nav"
        sx={{  flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
         
         
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 200 },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width:200},
          }}
          open
        >
          s
        </Drawer>
      </Box>

    <ResponsiveAppBar />
      {/* <Header   /> */}
      <HeroSection />
      <InputForm onSubmit={handleFormSubmit} />
      <ProductCard />
      <button onClick={() => setModalOpen(true)}>Open Login</button>
      <LoginModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <FeedbackToast open={toastOpen} onClose={() => setToastOpen(false)} message="Submitted successfully!" />
    </>
  );
}