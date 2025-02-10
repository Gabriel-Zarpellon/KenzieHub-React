import Logo from "../../assets/Logo.png";
import { TechList } from "../../components/TechList";
import { IoMdAdd } from "react-icons/io";

export function DashboardPage() {
  return (
    <>
      <header>
        <div>
          <img src={Logo} alt="KenzieHub Logo" />
          <button>Sair</button>
        </div>
      </header>
      <section>
        <div>
          <h1>Nome do usuario</h1>
          <p>Módulo do usuário</p>
        </div>
      </section>
      <section>
        <div>
          <h2>Tecnologias</h2>
          <button>
            <IoMdAdd size={20} />
          </button>
        </div>
        <TechList />
      </section>
    </>
  );
}
