import { Request, TokenBalance } from "../types/type.global";
import ethLogo from "@/lib/assets/tokens/ethereum.png";
import usdtLogo from "@/lib/assets/tokens/usdt.png";
import maticLogo from "@/lib/assets/tokens/polygon.png";

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

export const mockWalletBalance: TokenBalance[] = [
  {
    addressToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    symbol: "ETH",
    imgSrc: ethLogo,
    balance: 1.5,
  },
  {
    addressToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    symbol: "USDT",
    imgSrc: usdtLogo,
    balance: 1999,
  },
  {
    addressToken: "0x7c9f4C87d911613Fe9ca58b579f737911AAD2D43",
    symbol: "WMATIC",
    imgSrc: maticLogo,
    balance: 199,
  },
];

export const mockYourSuperWallets = [
  {
    wallet: "0x21557653ca416fb59702BF34575f01FF529D278b",
    timeToRecovery: 15,
    numberTokens: 3,
  },
  {
    wallet: "0xEE72F1035C706478F84AB9480E45B427Aa6B6682",
    timeToRecovery: 50,
    numberTokens: 5,
  },
  {
    wallet: "0x21557653ca416fb59702BF34575f01FF529D278b",
    timeToRecovery: 45,
    numberTokens: 1,
  },
];
