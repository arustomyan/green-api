import { useEffect, useState } from "react";
import style from "./Input.module.css";

interface InputProps {
  label?: string;
  name: string;
  type?: "text" | "number" | "email";
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  value: string | number;
  err?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label = "",
  name = "",
  type = "text",
  onChange,
  value,
  err,
  onFocus,
}) => {
  const [error, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsError(!!err);
  }, [err]);
  return (
    <div className={style.root}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>

      <input
        name={name}
        type={type}
        value={value}
        onFocus={onFocus}
        className={[style.input, error && style.inputError].join(" ")}
        onChange={onChange}
      />
      {error && <span className={style.error}>Обязательное поле</span>}
    </div>
  );
};
