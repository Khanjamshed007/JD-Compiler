import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CompilerInitialState {
  html: string;
  css: string;
  javascript: string;
  currentlanguage: "html" | "css" | "javascript";
}

const initialState: CompilerInitialState = {
  html: "",
  css: "",
  javascript: "",
  currentlanguage: "html",
};

const complierslice = createSlice({
  name: "compilerslice",
  initialState,
  reducers: {
    updatedLanguage: (
      state,
      action: PayloadAction<CompilerInitialState["currentlanguage"]>
    ) => {
      state.currentlanguage = action.payload;
    },
  },
});

export default complierslice.reducer;
export const { updatedLanguage } = complierslice.actions;
