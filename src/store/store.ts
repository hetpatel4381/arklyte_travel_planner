import { create } from "zustand";
import { AuthSlice, createAuthSlice } from "./slices";

type storeState = AuthSlice;

export const useAppState = create<storeState>()((...a) => ({
  ...createAuthSlice(...a),
}));
