import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, width: 600 }}>
        <Typography variant="h5" gutterBottom>Home</Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          Bem-vindo ao aplicativo Comandas!
        </Typography>

        <Typography variant="body2" sx={{ mb: 1 }}>
          Explore as funcionalidades e aproveite sua experiência.
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {`Data atual: ${new Date().toLocaleDateString()}`}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Home;
