import { Modal } from "../Modal";

export function EditTechModal() {
  const { register, handleSubmit } = useForm({
    values: {
      title: editTech.title,
      status: editTech.status,
    },
  });

  function submit(formData) {
    console.log(formData);
  }
  return (
    <Modal title="Tecnologia Detalhes" setIsOpen={} value={false}>
      <form onSubmit={handleSubmit(submit)}>
        <FormInput
          label="Nome"
          name="title"
          type="text"
          placeholder="Insira o nome da tecnologia"
          register={register}
        />
        <div>
          <label htmlFor="status">Selecionar status</label>
          <select
            name="status"
            defaultValue={"Iniciante"}
            {...register("status")}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </div>
        <button type="submit">Cadastrar tecnologia</button>
      </form>
    </Modal>
  );
}
