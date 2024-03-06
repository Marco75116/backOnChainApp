import { create } from "zustand";

interface useSecureTokenSelectionStore {
  tokensSelection: string;
  setTokensSelection: (tokens: string) => void;
}

export const useSecureTokenSelection = create<useSecureTokenSelectionStore>(
  (set) => ({
    tokensSelection: "",
    setTokensSelection: (tokens: string | undefined) =>
      set({ tokensSelection: tokens }),
  })
);
