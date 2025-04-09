import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const NotFound = () => {
  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, width: 500 }}>
        <Typography variant="h5" gutterBottom>404 - Página não encontrada</Typography>
        <Typography variant="body2" color="text.secondary">
          Verifique a URL ou retorne à página inicial.
        </Typography>
      </Paper>
    </Box>
  );
};

export default NotFound;
