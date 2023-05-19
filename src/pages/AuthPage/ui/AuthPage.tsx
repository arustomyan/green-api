import { AuthLayout } from "shared/ui";
import { SignInForm } from "features/SignIn";

export const AuthPage: React.FC = () => {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
};
