import { ImPencil } from "react-icons/im";
import { FaRegTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { TechContext } from "../../../providers/TechContext";

export function TechCard({ tech }) {
  const { deleteTech, setIsEditTechOpen, setEditTech } = useContext(TechContext);
  return (
    <li>
      <h3>{tech.title}</h3>
      <div>
        <p>{tech.status}</p>
        <button
          onClick={() => {
            setEditTech(tech);
            setIsEditTechOpen(true);
          }}
        >
          <ImPencil size={16} />
        </button>
        <button onClick={() => deleteTech(tech.id)}>
          <FaRegTrashAlt size={16} />
        </button>
      </div>
    </li>
  );
}
