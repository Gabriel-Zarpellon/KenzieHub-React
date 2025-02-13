import { useContext } from "react";
import { TechCard } from "./TechCard";
import styles from "./style.module.scss";
import { TechContext } from "../../providers/TechContext";

export function TechList() {
  const { userTechs } = useContext(TechContext);
  return (
    <ul className={styles.techList}>
      {userTechs?.map((tech) => (
        <TechCard key={tech.id} tech={tech} />
      ))}
    </ul>
  );
}
