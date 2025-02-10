import { useContext } from "react";
import { TechCard } from "./TechCard";
import { UserContext } from "../../providers/UserContext";

export function TechList() {
  const { userTechs } = useContext(UserContext);
  return (
    <ul>
      {userTechs.map((tech) => (
        <TechCard key={tech.id} tech={tech} />
      ))}
    </ul>
  );
}
