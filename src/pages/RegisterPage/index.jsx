import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { RegisterForm } from "../../components/RegisterForm";

export function RegisterPage() {
  return (
    <section>
      <div>
        <div>
          <img src={Logo} alt="KenzieHub Logo" />
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </div>
        <div className="form">
          <div>
            <h1 className="title one">Crie sua conta</h1>
            <p className="paragraph">Rapido e grátis, vamos nessa</p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
