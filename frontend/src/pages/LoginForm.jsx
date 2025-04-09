import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        if (data.usuario === 'abc' && data.senha === 'bolinhas') {
            localStorage.setItem('loginRealizado', data.usuario);
            navigate('/home');
        } else {
            alert("Usuário ou senha inválidos!");
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#212121', // fundo escuro igual aos outros
            }}
        >
            <Paper elevation={3} sx={{ padding: 4, width: 300 }}>
                <Typography variant="h6" align="center" gutterBottom>
                    Login
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="Usuário"
                        fullWidth
                        margin="normal"
                        {...register('usuario', { required: 'Usuário é obrigatório' })}
                        error={!!errors.usuario}
                        helperText={errors.usuario?.message}
                    />

                    <TextField
                        label="Senha"
                        type="password"
                        fullWidth
                        margin="normal"
                        {...register('senha', {
                            required: 'Senha é obrigatória',
                            minLength: {
                                value: 6,
                                message: 'Senha deve ter pelo menos 6 caracteres',
                            },
                        })}
                        error={!!errors.senha}
                        helperText={errors.senha?.message}
                    />

                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                        Entrar
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default LoginForm;
