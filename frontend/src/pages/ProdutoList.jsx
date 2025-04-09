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
  
  const produtos = [
    { id: 1, nome: 'Pastel de Carne', preco: 'R$ 8,00', categoria: 'Salgados' },
    { id: 2, nome: 'Pastel de Queijo', preco: 'R$ 7,50', categoria: 'Salgados' },
    { id: 3, nome: 'Pastel de Frango com Catupiry', preco: 'R$ 9,00', categoria: 'Salgados' },
    { id: 4, nome: 'Coxinha de Frango', preco: 'R$ 6,00', categoria: 'Salgados' },
    { id: 5, nome: 'Refrigerante Lata', preco: 'R$ 5,00', categoria: 'Bebidas' },
    { id: 6, nome: 'Suco Natural', preco: 'R$ 6,50', categoria: 'Bebidas' },
    { id: 7, nome: 'Pastel Doce de Chocolate', preco: 'R$ 9,50', categoria: 'Doces' },
    { id: 8, nome: 'Pastel Doce de Banana com Canela', preco: 'R$ 9,00', categoria: 'Doces' }
  ];
  
  
  const ProdutoList = () => {
    return (
      <Box sx={{ backgroundColor: '#f4f4f4', padding: 3, borderRadius: 3, maxWidth: 800, margin: 'auto', mt: 4 }}>
        <Toolbar>
          <Typography variant="h5" color="text.primary">Lista de Produtos</Typography>
        </Toolbar>
  
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#eeeeee' }}>
              <TableRow>
                <TableCell><strong>ID</strong></TableCell>
                <TableCell><strong>Nome</strong></TableCell>
                <TableCell><strong>Categoria</strong></TableCell>
                <TableCell><strong>Preço</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {produtos.map((produto) => (
                <TableRow key={produto.id}>
                  <TableCell>{produto.id}</TableCell>
                  <TableCell>{produto.nome}</TableCell>
                  <TableCell>{produto.categoria}</TableCell>
                  <TableCell>{produto.preco}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };
  
  export default ProdutoList;
  