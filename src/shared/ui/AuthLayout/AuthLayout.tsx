import style from "./AuthLayout.module.css";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div>
      <div className={style.root}>
        <div className={style.logoContainer}>
          <p className={style.logo}>
            GREEN <br /> API
          </p>
        </div>
        <div className={style.formAuth}>{children}</div>
      </div>
    </div>
  );
};
