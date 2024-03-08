import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CompilerInitialState {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
  currentlanguage: "html" | "css" | "javascript";
}

const initialState: CompilerInitialState = {
  fullCode: {
    html: "this is html",
    css: "this is css",
    javascript: "this is js",
  },
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
    updatedCodeValue: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentlanguage] = action.payload;
    },
    updateFullCode: (
      state,
      action: PayloadAction<CompilerInitialState["fullCode"]>
    ) => {
      state.fullCode = action.payload;
    },
  },
});

export default complierslice.reducer;
export const { updatedLanguage, updatedCodeValue, updateFullCode } =
  complierslice.actions;
