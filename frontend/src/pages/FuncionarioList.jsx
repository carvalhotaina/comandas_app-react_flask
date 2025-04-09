import {
    Box,
    Typography,
    Toolbar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
  } from '@mui/material';
  
  const funcionarios = [
    { id: 1, nome: 'TAÍNA CARVALHO', cpf: '123.456.789-00', telefone: '(49) 99999-9999', cargo: 'Gerente' },
    { id: 2, nome: 'Ana Caroline', cpf: '987.654.321-00', telefone: '(49) 98888-8888', cargo: 'Atendente' }
  ];
  
  const FuncionarioList = () => {
    return (
      <Box sx={{ backgroundColor: '#f4f4f4', padding: 3, borderRadius: 3, maxWidth: 800, margin: 'auto', mt: 4 }}>
        <Toolbar>
          <Typography variant="h5" color="text.primary">Lista de Funcionários</Typography>
        </Toolbar>
  
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#eeeeee' }}>
              <TableRow>
                <TableCell><strong>ID</strong></TableCell>
                <TableCell><strong>Nome</strong></TableCell>
                <TableCell><strong>CPF</strong></TableCell>
                <TableCell><strong>Telefone</strong></TableCell>
                <TableCell><strong>Cargo</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {funcionarios.map((f) => (
                <TableRow key={f.id}>
                  <TableCell>{f.id}</TableCell>
                  <TableCell>{f.nome}</TableCell>
                  <TableCell>{f.cpf}</TableCell>
                  <TableCell>{f.telefone}</TableCell>
                  <TableCell>{f.cargo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };
  
  export default FuncionarioList;
  