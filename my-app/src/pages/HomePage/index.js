import React, { useState } from 'react';
import { Button, Container, Snackbar, Typography } from '@mui/material';

const Home = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleDownloadClick = () => {
    // Add your download logic here
    // For demonstration purposes, let's open a Snackbar
    setOpenSnackbar(true);
  };

  return (
    <div className="home" style={{ position: 'relative', textAlign: 'center' }}>
      <div className="overlay"></div>
      <Container style={{ color: 'white', paddingTop: '20vh' }}>
        <Typography variant="h2" gutterBottom>
          Download our app now!
        </Typography>
        <Button variant="contained" color="error" size="large" onClick={handleDownloadClick}>
          Download
        </Button>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Download initiated!"
      />
    </div>
  );
};

export default Home;
