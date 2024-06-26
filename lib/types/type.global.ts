import { StaticImageData } from "next/image";

export const requestTypes = ["Request Received", "Request Made"] as const;
export const requestTypesFilter = ["Request All", ...requestTypes];

export type Request = {
  request: (typeof requestTypes)[number];
  status: "pending" | "completed" | "cancelled"; // Assuming status can be one of these values
  walletTarget: string;
  dateRequest: string;
  remainDays: string; // or number if you prefer to store the remaining days as a numerical value
};

export type TokenBalance = {
  addressToken: `0x${string}`;
  symbol: string;
  imgSrc: StaticImageData;
  balance: number;
  decimals: number;
};

export type SuperWallet = {
  wallet: string;
  timeToRecovery: number;
  numberTokens: number;
};
