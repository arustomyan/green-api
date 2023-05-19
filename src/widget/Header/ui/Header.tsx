import { Button } from "shared/ui";
import style from "./Header.module.css";
import { useAppDispatch } from "shared/hooks/hooksRedux";
import { clearSessionData } from "entities/Session";

export const Header = () => {
  const dispatch = useAppDispatch();

  const handleExit = () => {
    dispatch(clearSessionData());
    console.log("scdnjcn");
  };
  return (
    <header className={style.header}>
      <p className={style.logo}>green api</p>
      <Button className={style.button} onClick={handleExit}>
        выйти
      </Button>
    </header>
  );
};
