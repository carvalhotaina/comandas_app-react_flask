import React, { useEffect, useState } from "react";
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    IconButton, Typography, Button, Toolbar, useMediaQuery
} from '@mui/material';
import { Edit, Delete, Visibility, FiberNew } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { getClientes, deleteCliente } from '../services/clienteService';
import { toast } from 'react-toastify';
import { useTheme } from '@mui/material/styles';
import './ClienteList.css';
import html2pdf from 'html2pdf.js';


function ClienteList() {
    const navigate = useNavigate();
    const [clientes, setClientes] = useState([]);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        fetchClientes();
    }, []);

    const fetchClientes = async () => {
        try {
            const data = await getClientes();
            setClientes(data);
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
        }
    };

    const handleDeleteClick = (cliente) => {
        toast(
            <div>
                <Typography>
                    Tem certeza que deseja excluir o cliente <strong>{cliente.nome}</strong>?
                </Typography>
                <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        variant="contained" color="error" size="small"
                        onClick={() => handleDeleteConfirm(cliente.id_cliente)}
                        style={{ marginRight: '10px' }}
                    >
                        Excluir
                    </Button>
                    <Button variant="outlined" size="small" onClick={() => toast.dismiss()}>Cancelar</Button>
                </div>
            </div>,
            {
                position: "top-center",
                autoClose: false,
                closeOnClick: false,
                draggable: false,
                closeButton: false
            }
        );
    };

    const handleDeleteConfirm = async (id) => {
        try {
            await deleteCliente(id);
            fetchClientes();
            toast.dismiss();
            toast.success('Cliente excluído com sucesso!', { position: "top-center" });
        } catch (error) {
            console.error('Erro ao deletar cliente:', error);
            toast.error('Erro ao excluir cliente.', { position: "top-center" });
        }
    };

    const handleExportPDF = () => {
        const element = document.getElementById('pdf-content');
        const opt = {
            margin: 0.5,
            filename: 'relatorio_clientes.pdf',
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save();
    };


        return (
            <div className="table-container">
                <div className="card">
                    <div id="pdf-content">
                        <Toolbar className="toolbar">
                            <Typography variant="h6" className="title">Clientes</Typography>
                            <Button className="new-button" onClick={() => navigate('/cliente')} startIcon={<FiberNew />}>
                                Novo
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={handleExportPDF}
                                style={{ marginLeft: 'auto' }}
                            >
                                Exportar PDF
                            </Button>

                        </Toolbar>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="table-header-cell">ID</TableCell>
                                    <TableCell className="table-header-cell">Nome</TableCell>
                                    <TableCell className="table-header-cell">CPF</TableCell>
                                    <TableCell className="table-header-cell">Ações</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {clientes.map((cliente) => (
                                    <TableRow key={cliente.id_cliente}>
                                        <TableCell className="table-cell">{cliente.id_cliente}</TableCell>
                                        <TableCell className="table-cell">{cliente.nome}</TableCell>
                                        <TableCell className="table-cell">{cliente.cpf}</TableCell>
                                        <TableCell>
                                            <IconButton className="actions-button"
                                                onClick={() => navigate(`/cliente/view/${cliente.id_cliente}`)}
                                            >
                                                <Visibility color="primary" />
                                            </IconButton>
                                            <IconButton className="actions-button"
                                                onClick={() => navigate(`/cliente/edit/${cliente.id_cliente}`)}
                                            >
                                                <Edit color="secondary" />
                                            </IconButton>
                                            <IconButton className="actions-button"
                                                onClick={() => handleDeleteClick(cliente)}
                                            >
                                                <Delete color="error" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }

    export default ClienteList;
