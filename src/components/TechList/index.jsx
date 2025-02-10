import { TechCard } from "./TechCard";

export function TechList() {
  const techList = [
    {
      id: 1,
      title: "React",
      status: "Avançado",
    },
  ];
  return (
    <ul>
      {techList.map((tech) => (
        <TechCard key={tech.id} tech={tech} />
      ))}
    </ul>
  );
}
