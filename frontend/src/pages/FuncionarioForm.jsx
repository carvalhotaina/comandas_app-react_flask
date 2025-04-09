import React, { useState } from 'react';

const FuncionarioForm = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [grupo, setGrupo] = useState('');

  const formatCPF = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      .slice(0, 14);
  };

  const formatPhone = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .slice(0, 15);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do funcionário:', {
      nome,
      cpf,
      telefone,
      matricula,
      senha,
      grupo
    });
  };

  return (
    <div style={styles.page}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Cadastro de Funcionário</h2>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome completo"
            style={styles.input}
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>CPF</label>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(formatCPF(e.target.value))}
            placeholder="000.000.000-00"
            maxLength={14}
            style={styles.input}
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Telefone</label>
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(formatPhone(e.target.value))}
            placeholder="(00) 00000-0000"
            maxLength={15}
            style={styles.input}
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Matrícula</label>
          <input
            type="text"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            placeholder="Número de matrícula"
            style={styles.input}
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha de acesso"
            style={styles.input}
          />
        </div>

        <div style={styles.fieldGroup}>
          <label style={styles.label}>Grupo</label>
          <select
            value={grupo}
            onChange={(e) => setGrupo(e.target.value)}
            style={styles.input}
          >
            <option value="">Selecione</option>
            <option value="admin">Admin</option>
            <option value="gerente">Gerente</option>
            <option value="funcionario">Funcionário</option>
          </select>
        </div>

        <button type="submit" style={styles.button}>Cadastrar</button>
      </form>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    background: '#e3f2fd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  },
  form: {
    backgroundColor: '#fff',
    padding: '30px 25px',
    borderRadius: '12px',
    maxWidth: '450px',
    width: '100%',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px'
  },
  title: {
    fontSize: '1.5rem',
    textAlign: 'center',
    color: '#1976d2',
    marginBottom: '10px'
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    marginBottom: '4px',
    fontSize: '0.95rem',
    fontWeight: 600,
    color: '#444'
  },
  input: {
    padding: '10px 12px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    transition: 'border 0.2s ease-in-out',
    outline: 'none'
  },
  button: {
    padding: '12px',
    fontSize: '1rem',
    backgroundColor: '#1976d2',
    color: 'white',
    fontWeight: 600,
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }
};

export default FuncionarioForm;
