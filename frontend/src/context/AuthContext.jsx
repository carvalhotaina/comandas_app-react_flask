import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    usuario: null,
    grupo: null,
    autenticado: false,
    token: null,
  });

  const login = async (usuario, senha) => {
    try {
      const isLocal = usuario.startsWith("@");
      let payload, url;

      if (isLocal) {
        payload = { username: usuario.slice(1), password: senha };
        url = "http://localhost:4000/api/login"; // Login local se existir
      } else {
        payload = { cpf: usuario, senha };
        url = "http://localhost:4000/auth/login_externo"; // Via proxy_bff
      }

      const response = await axios.post(url, payload);
      const { nome, id_funcionario } = response.data;

      setAuthState({
        usuario: nome,
        grupo: "funcionario",
        autenticado: true,
        token: null,
      });

      return true;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return false;
    }
  };

  const logout = () => {
    setAuthState({
      usuario: null,
      grupo: null,
      autenticado: false,
      token: null,
    });
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
