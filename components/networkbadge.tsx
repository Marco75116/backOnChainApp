"use client";
import React, { useMemo } from "react";
import { useAccount, useSwitchChain } from "wagmi";
import { Badge } from "./ui/badge";

const Networkbadge = () => {
	const { chainId } = useAccount();
	const isGoerliNetwork = useMemo(() => {
		return chainId === 5;
	}, [chainId]);
	const { switchChain } = useSwitchChain();

	return (
		<Badge
			className={`m-2 mr-5 ${!isGoerliNetwork && "cursor-pointer"}`}
			variant={isGoerliNetwork ? "default" : "destructive"}
			onClick={() => {
				switchChain({ chainId: 5 });
			}}
		>
			{isGoerliNetwork ? "Goerli" : "You are on the wrong network."}
		</Badge>
	);
};

export default Networkbadge;
