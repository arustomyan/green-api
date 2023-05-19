import style from "./EmptyChat.module.css";

export const EmptyChat = () => {
  return (
    <div className={style.root}>
      <span className={style.text}>выберите чат</span>
    </div>
  );
};
