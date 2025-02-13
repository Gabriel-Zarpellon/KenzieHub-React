import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const [isAddTechOpen, setIsAddTechOpen] = useState(false);
  const [isEditTechOpen, setIsEditTechOpen] = useState(false);
  const [editTech, setEditTech] = useState(null);

  const token = localStorage.getItem("@TOKEN");

  const { data: userTechs } = useQuery({
    queryKey: ["techs"],
    queryFn: async () => {
      const { data } = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.techs;
    },
  });

  const client = useQueryClient();

  function revalidate() {
    client.invalidateQueries({ queryKey: ["techs"] });
  }

  const addTech = useMutation({
    mutationFn: async function (formData) {
      return await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      revalidate();
      toast.success("Tecnologia adicionada!");
      setIsAddTechOpen(false);
    },
    onError: (error) => {
      console.log(error);
      toast.error("O usuário já possui essa tecnologia cadastrada!");
    },
  });

  const deleteTech = useMutation({
    mutationFn: async function (tech_id) {
      return await api.delete(`/users/techs/${tech_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      revalidate();
      toast.success("Tecnologia excluída!");
    },
  });

  const updateTech = useMutation({
    mutationFn: async function (formData) {
      return await api.put(`/users/techs/${editTech.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      revalidate();
      toast.success("Tecnologia atualizada!");
      setIsEditTechOpen(false);
    },
  });

  return (
    <TechContext.Provider
      value={{
        userTechs,
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
