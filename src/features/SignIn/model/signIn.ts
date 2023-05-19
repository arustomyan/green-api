import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "app/appStore";
import { sessionApi } from "entities/Session/api/sessionApi";
import { recordAuthData } from "entities/Session/model/slice";
import { formData } from "./type";

export const signInThunk = createAsyncThunk<
  void,
  formData,
  { state: RootState }
>("session/recordAuthDat", async (body: formData, { dispatch }) => {
  try {
    const res = await sessionApi(body);
    console.log(res);

    if (res.stateInstance === "authorized") {
      dispatch(recordAuthData(body));
    }
  } catch (error) {
    throw new Error("Unknown error");
  }
});
