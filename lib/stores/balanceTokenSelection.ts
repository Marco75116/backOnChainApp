import { create } from "zustand";
import { TokenBalance } from "../types/type.global";

interface useTokensBalanceSelectionStore {
  tokensSelection: TokenBalance[];
  setTokensSelection: (tokens: TokenBalance[]) => void;
  addTokenToSelection: (token: TokenBalance) => void;
  removeTokenToSelection: (token: TokenBalance) => void;
}

export const useTokensBalanceSelection = create<useTokensBalanceSelectionStore>(
  (set) => ({
    tokensSelection: [],
    setTokensSelection: (tokens: TokenBalance[]) =>
      set({ tokensSelection: tokens }),
    addTokenToSelection: (token: TokenBalance) =>
      set((state) => ({
        tokensSelection: [...state.tokensSelection, token],
      })),
    removeTokenToSelection: (tokenToRemove: TokenBalance) =>
      set((state) => ({
        tokensSelection: state.tokensSelection.filter(
          (token) => token.addressToken !== tokenToRemove.addressToken
        ),
      })),
  })
);
