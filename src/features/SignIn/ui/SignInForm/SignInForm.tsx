import { useState } from "react";
import { formData, signInThunk } from "features/SignIn";
import { Input, Button } from "shared/ui";
import { useAppDispatch } from "shared/hooks";
import style from "./SignInForm.module.css";

export const SignInForm = () => {
  const [formData, setFormData] = useState<formData>({
    ApiTokenInstance: "",
    idInstance: "",
  });
  const dispatch = useAppDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(signInThunk(formData));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Input
        label="idInstance"
        value={formData.idInstance}
        name="idInstance"
        onChange={handleChange}
      />
      <Input
        onChange={handleChange}
        label="ApiTokenInstance"
        name="ApiTokenInstance"
        value={formData.ApiTokenInstance}
      />
      <Button onClick={handleSubmit} className={style.button}>
        авторизоваться
      </Button>
    </form>
  );
};
