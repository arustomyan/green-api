import style from "./Input.module.css";

interface InputProps {
  label?: string;
  name: string;
  type?: "text" | "number" | "email";
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string | number;
}

export const Input: React.FC<InputProps> = ({
  label = "",
  name = "",
  type = "text",
  onChange,
  value,
}) => {
  return (
    <>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>

      <input
        name={name}
        type={type}
        value={value}
        className={style.input}
        onChange={onChange}
      />
    </>
  );
};
