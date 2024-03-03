import { Request } from "../types/type.global";

export const menu = [
  {
    label: "Settings",
    href: "/settings",
  },
  {
    label: "Secured Assets",
    href: "/secured-assets",
  },
  {
    label: "Secured NFTs",
    href: "/secured-nfts",
  },
  {
    label: "Recovery",
    href: "/recovery",
  },
  {
    label: "Your Wallets",
    href: "/your-wallets",
  },
];

export const mockRequests: Request[] = [
  {
    request: "Request Received",
    status: "pending",
    walletTarget: "0x98cEA6ed2CF1047B08942cDEeD525DC7eAe2E84e",
    dateRequest: "1 janvier 14 : 23",
    remainDays: "88",
  },
  {
    request: "Request Made",
    status: "completed",
    walletTarget: "0x98cEA6ed2CF1047B08942cDEeD525DC7eAe2E84e",
    dateRequest: "13 janvier 21 : 23",
    remainDays: "0",
  },
  {
    request: "Request Received",
    status: "cancelled",
    walletTarget: "0x01738387092E007CcB8B5a73Fac2a9BA23cf91d3",
    dateRequest: "1 february 4 : 23",
    remainDays: "0",
  },
  {
    request: "Request Made",
    status: "pending",
    walletTarget: "0x01738387092E007CcB8B5a73sdc2a9BA23cf91d3",
    dateRequest: "1 janvier 14 : 23",
    remainDays: "88",
  },
];
