import { createConfig, http } from "wagmi";
import { mainnet, base, optimism, goerli } from "wagmi/chains";
import { walletConnect } from "wagmi/connectors";

const projectId = process.env.NEXT_PUBLIC_WALLECT_CONNECT_PROJECTID as string;

export const config = createConfig({
  chains: [goerli, mainnet, base],
  connectors: [walletConnect({ projectId })],
  transports: {
    [goerli.id]: http(),
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});

export const configB = createConfig({
  chains: [optimism],
  transports: {
    [optimism.id]: http(),
  },
});
