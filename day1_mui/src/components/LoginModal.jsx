import { Modal, Box, TextField, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  p: 4,
  boxShadow: 24,
  borderRadius: 2,
};

export default function LoginModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <TextField label="Username" fullWidth sx={{ mb: 2 }} />
        <TextField label="Password" type="password" fullWidth sx={{ mb: 2 }} />
        <Button variant="contained" fullWidth onClick={onClose}>
          Login
        </Button>
      </Box>
    </Modal>
  );
}