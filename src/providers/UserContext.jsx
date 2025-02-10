import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [userTechs, setUserTechs] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    async function loadUser() {
      if (token) {
        try {
          const { data } = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
          setUserTechs(data.techs);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
          localStorage.removeItem("@TOKEN");
        }
      }
    }
    loadUser();
  }, []);

  async function userRegister(formData) {
    try {
      await api.post("/users", formData);
      alert("Cadastro efetuado com sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error.message[0]);
    }
  }

  async function userLogin(formData) {
    try {
      const { data } = await api.post("/sessions", formData);
      setUser(data.user);
      localStorage.setItem("@TOKEN", data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert("E-mail ou senha incorretos!");
    }
  }

  async function userLogout() {
    localStorage.removeItem("@TOKEN");
    setUser(null);
    navigate("/");
  }

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userRegister,
        user,
        userLogout,
        userTechs,
        setUserTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
