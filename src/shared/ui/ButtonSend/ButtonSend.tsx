import { FC, MouseEventHandler } from "react";
import style from "./ButtonSend.module.css";

interface ButtonSendProps {
  isSend: boolean;
  modifiers?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const ButtonSend: FC<ButtonSendProps> = ({
  modifiers,
  isSend,
  onClick,
}) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <button
      type="submit"
      className={[style.button, modifiers].join(" ")}
      onClick={handleClick}
    >
      {isSend ? (
        <div className={style.loader}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <svg
          className={style.sendSvgIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 509 509"
        >
          <path
            fill="currentColor"
            d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"
          />
        </svg>
      )}
    </button>
  );
};
