import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AuthRouter } from "./appRouter";
import { persistor, store } from "./appStore";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthRouter />
        </PersistGate>
      </Provider>
    </>
  );
};
