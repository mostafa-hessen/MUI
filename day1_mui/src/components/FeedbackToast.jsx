import { Snackbar } from '@mui/material';

export default function FeedbackToast({ open, onClose, message }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      message={message}
    />
  );
}