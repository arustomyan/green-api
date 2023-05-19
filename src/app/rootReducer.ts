import { combineReducers } from "@reduxjs/toolkit";
import { chatSlice } from "entities/ChatListEl";
import { sessionSlice } from "entities/Session";

export const rootReducer = combineReducers({
  [sessionSlice.name]: sessionSlice.reducer,
  [chatSlice.name]: chatSlice.reducer,
});
