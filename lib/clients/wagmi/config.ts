import { createConfig, http } from "wagmi";
import { goerli } from "wagmi/chains";
import { injected, walletConnect } from "wagmi/connectors";

const projectId = process.env.NEXT_PUBLIC_WALLECT_CONNECT_PROJECTID as string;

export const config = createConfig({
  chains: [goerli],
  connectors: [walletConnect({ projectId }), injected()],
  transports: {
    [goerli.id]: http("https://goerli.gateway.tenderly.co"),
  },
});
