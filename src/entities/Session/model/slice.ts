import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/appStore";

type SessionSliceState = {
  idInstance?: string;
  ApiTokenInstance?: string;
  isAuth: boolean;
};

const initialState: SessionSliceState = {
  isAuth: false,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    clearSessionData: (state) => {
      state.ApiTokenInstance = undefined;
      state.idInstance = undefined;
      state.isAuth = false;
    },
    recordAuthData: (
      state,
      actions: PayloadAction<{ ApiTokenInstance: string; idInstance: string }>
    ) => {
      state.ApiTokenInstance = actions.payload.ApiTokenInstance;
      state.idInstance = actions.payload.idInstance;
      state.isAuth = true;
    },
  },
});

export const selectIsAuth = (state: RootState) => state.session.isAuth;

export const { clearSessionData, recordAuthData } = sessionSlice.actions;
