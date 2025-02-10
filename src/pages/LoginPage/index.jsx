import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { LoginForm } from "../../components/LoginForm";

export function LoginPage() {
  return (
    <section>
      <div>
        <div>
          <img src={Logo} alt="KenzieHub Logo" />
        </div>
        <LoginForm />
        <div>
          <p>Ainda não possui uma conta?</p>
          <Link to="/register">
            <button>Cadastre-se</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
