import { useState } from "react";
import { formData, signInThunk } from "features/SignIn";
import { Input, Button } from "shared/ui";
import { useAppDispatch, useAppSelector } from "shared/hooks";
import style from "./SignInForm.module.css";
import { deleteErrorAuth, selectIsAuthError } from "entities/Session";

export const SignInForm = () => {
  const [formData, setFormData] = useState<formData>({
    ApiTokenInstance: "",
    idInstance: "",
  });

  const [error, setError] = useState({
    ApiTokenInstance: false,
    idInstance: false,
  });

  const dispatch = useAppDispatch();

  const errorAuth = useAppSelector(selectIsAuthError);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.ApiTokenInstance == "") {
      setError((prev) => ({ ...prev, ApiTokenInstance: true }));
    }
    if (formData.idInstance == "") {
      setError((prev) => ({ ...prev, idInstance: true }));
      return;
    }
    dispatch(signInThunk(formData));
  };

  const handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    setError((prev) => ({ ...prev, [e.target.name]: false }));
    dispatch(deleteErrorAuth());
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Input
        label="idInstance"
        value={formData.idInstance}
        name="idInstance"
        onChange={handleChange}
        err={error.idInstance}
        onFocus={handleFocus}
      />
      <Input
        onChange={handleChange}
        label="ApiTokenInstance"
        name="ApiTokenInstance"
        value={formData.ApiTokenInstance}
        err={error.ApiTokenInstance}
        onFocus={handleFocus}
      />
      <Button onClick={handleSubmit} type="submit" className={style.button}>
        авторизоваться
      </Button>
      {errorAuth && <p className={style.errorAuth}>Ошибка авторизации</p>}
    </form>
  );
};
