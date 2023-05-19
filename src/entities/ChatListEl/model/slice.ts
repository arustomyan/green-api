import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/appStore";

type chatSliceState = {
  idActiveChat: string;
};

const initialState: chatSliceState = {
  idActiveChat: "",
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addActiveChat: (state, actions: PayloadAction<chatSliceState>) => {
      state.idActiveChat = actions.payload.idActiveChat;
    },
    removeActiveChat: (state) => {
      state.idActiveChat = "";
    },
  },
});

export const selectIsChat = (state: RootState) => state.chat.idActiveChat;

export const { addActiveChat, removeActiveChat } = chatSlice.actions;
