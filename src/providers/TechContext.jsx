import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services/api";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const { userTechs, setUserTechs } = useContext(UserContext);

  const [isAddTechOpen, setIsAddTechOpen] = useState(false);
  const [isEditTechOpen, setIsEditTechOpen] = useState(false);
  const [editTech, setEditTech] = useState(null);

  const token = localStorage.getItem("@TOKEN");

  async function addTech(formData) {
    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserTechs([...userTechs, data]);
      alert("Tecnologia adicionada");
      setIsAddTechOpen(false);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  async function deleteTech(tech_id) {
    try {
      await api.delete(`/users/techs/${tech_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Tecnologia excluída");
    } catch (error) {
      console.log(error);
    }
  }

  async function updateTech(formData) {
    try {
      const { data } = await api.put(`/users/techs/${editTech.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserTechs(
        userTechs.map((tech) => (tech.id == editTech.id ? data : tech))
      );
      alert("Tecnologia atualizada");
      setIsEditTechOpen(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TechContext.Provider
      value={{
        isAddTechOpen,
        setIsAddTechOpen,
        addTech,
        deleteTech,
        isEditTechOpen,
        setIsEditTechOpen,
        editTech,
        setEditTech,
        updateTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
