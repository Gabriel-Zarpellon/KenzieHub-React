import { useForm } from "react-hook-form";
import { FormInput } from "../FormInput";

export function LoginForm() {
  const { register, handleSubmit } = useForm();

  function submit(formData) {
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <FormInput
        label="E-mail"
        type="email"
        name="email"
        placeholder="Digite seu e-mail"
        register={register}
      />
      <FormInput
        label="Senha"
        type="password"
        name="password"
        placeholder="Digite sua senha"
        register={register}
      />

      <button type="submit">Entrar</button>
    </form>
  );
}
