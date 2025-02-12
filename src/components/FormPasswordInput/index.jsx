import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import styles from "./style.module.scss";
import { useState } from "react";

export function FormPasswordInput({ label, name, placeholder, register }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <div className={styles.inputBox}>
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          {...register(`${name}`)}
          required
        />
        <div className={styles.eyeBox}>
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <IoEyeOff size={16} /> : <IoEye size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}
