import { ImPencil } from "react-icons/im";
import { FaRegTrashAlt } from "react-icons/fa";

export function TechCard({ tech }) {
  return (
    <li>
      <h3>{tech.title}</h3>
      <div>
        <p>{tech.status}</p>
        <button>
          <ImPencil size={16} />
        </button>
        <button>
          <FaRegTrashAlt size={16} />
        </button>
      </div>
    </li>
  );
}
