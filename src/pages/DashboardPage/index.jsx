import { useContext, useState } from "react";
import Logo from "../../assets/Logo.png";
import { TechList } from "../../components/TechList";
import { IoMdAdd } from "react-icons/io";
import { UserContext } from "../../providers/UserContext";
import { AddTechModal } from "../../components/AddTechModal";
import { TechContext } from "../../providers/TechContext";
import { EditTechModal } from "../../components/EditTechModal";

export function DashboardPage() {
  const { user, userLogout } = useContext(UserContext);
  const { isAddTechOpen, setIsAddTechOpen, isEditTechOpen } =
    useContext(TechContext);

  return (
    <>
      <header>
        <div>
          <img src={Logo} alt="KenzieHub Logo" />
          <button onClick={() => userLogout()}>Sair</button>
        </div>
      </header>
      <section>
        <div>
          <h1>{user?.name}</h1>
          <p>{user?.course_module}</p>
        </div>
      </section>
      <section>
        <div>
          <h2>Tecnologias</h2>
          <button onClick={() => setIsAddTechOpen(true)}>
            <IoMdAdd size={20} />
          </button>
        </div>
        <TechList />

        {isAddTechOpen ? <AddTechModal /> : null}
        {isEditTechOpen ? <EditTechModal /> : null}
      </section>
    </>
  );
}
