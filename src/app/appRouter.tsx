import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthPage } from "pages/AuthPage";
import { ChatPage } from "pages/ChatPage";
import { selectIsAuth } from "entities/Session";
import { useAppSelector } from "shared/hooks/hooksRedux";

const appPublicRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
    errorElement: <div>404</div>,
  },
]);

const appPrivateRouter = createBrowserRouter([
  {
    path: "/",
    element: <ChatPage />,
    errorElement: <div>404</div>,
  },
]);

export const AuthRouter = () => {
  const isAuth = useAppSelector(selectIsAuth);

  if (isAuth) return <RouterProvider router={appPrivateRouter} />;
  return <RouterProvider router={appPublicRouter} />;
};
