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
  
  const clientes = [
    { id: 1, nome: 'Tainá Carvalho', cpf: '123.456.789-00', telefone: '(49) 91234-5678' },
    { id: 2, nome: 'Victor Silva', cpf: '987.654.321-00', telefone: '(49) 99876-5432' }
  ];
  
  const ClienteList = () => {
    return (
      <Box sx={{ backgroundColor: '#f4f4f4', padding: 3, borderRadius: 3, maxWidth: 800, margin: 'auto', mt: 4 }}>
        <Toolbar>
          <Typography variant="h5" color="text.primary">Lista de Clientes</Typography>
        </Toolbar>
  
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#eeeeee' }}>
              <TableRow>
                <TableCell><strong>ID</strong></TableCell>
                <TableCell><strong>Nome</strong></TableCell>
                <TableCell><strong>CPF</strong></TableCell>
                <TableCell><strong>Telefone</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clientes.map((cliente) => (
                <TableRow key={cliente.id}>
                  <TableCell>{cliente.id}</TableCell>
                  <TableCell>{cliente.nome}</TableCell>
                  <TableCell>{cliente.cpf}</TableCell>
                  <TableCell>{cliente.telefone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };
  
  export default ClienteList;
  