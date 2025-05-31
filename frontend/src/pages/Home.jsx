import React from "react";
import pastelImg from './images/img.png';
import { Box, Typography, Button } from "@mui/material";
import './Home.css';

const Home = () => {
    return (
        <Box className="home-container">
            <Box className="card">
                <Typography variant="h3" className="title" gutterBottom>
                    Bem-vindo à Pastelaria Delícia!
                </Typography>
                <Typography variant="h6" className="subtitle" gutterBottom>
                    O melhor pastel da cidade você encontra aqui.
                </Typography>
                <img
                    src={pastelImg}
                    alt="Pastel crocante"
                    className="pastel-img"
                    style={{ width: "250px", height: "auto" }}
                />

            </Box>
        </Box>
    );
};

export default Home;
