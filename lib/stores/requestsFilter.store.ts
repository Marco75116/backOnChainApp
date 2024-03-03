import { create } from "zustand";
import { requestTypesFilter } from "../types/type.global";

interface useRequestsFilterStore {
  walletSearch: string;
  setWalletSearch: (walletSearch: string) => void;
  requestTypeFilter: (typeof requestTypesFilter)[number];
  setRequestTypeFilter: (
    requestTypefilter: (typeof requestTypesFilter)[number]
  ) => void;
}

export const useRequestsFilter = create<useRequestsFilterStore>((set) => ({
  requestTypeFilter: "Request All",
  setRequestTypeFilter: (
    requestTypefilter: (typeof requestTypesFilter)[number]
  ) =>
    set({
      requestTypeFilter: requestTypefilter,
    }),
  walletSearch: "",
  setWalletSearch: (walletSearch: string) =>
    set({ walletSearch: walletSearch }),
}));
