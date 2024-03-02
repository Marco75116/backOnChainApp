"use client";
import React from "react";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogOverlay,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Connector, useConnect } from "wagmi";
import metamaskLogo from "../lib/assets/wallets/metamask.svg";
import walletconnectLogo from "../lib/assets/wallets/walletconnect.svg";

export default function ConnectModal() {
	const { connect, connectors } = useConnect();
	return (
		<div className="flex justify-center w-full">
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="default">Connect Wallet</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>Choose a Wallet</DialogHeader>
					<div className="flex flex-col gap-4">
						{connectors.map((connector: Connector) => (
							<Button
								className="flex gap-2"
								key={connector.id}
								onClick={() => connect({ connector })}
							>
								{connector.name === "MetaMask" ? (
									<Image
										src={metamaskLogo}
										alt="logo metamask"
										height={20}
										width={20}
									/>
								) : connector.name === "WalletConnect" ? (
									<Image
										src={walletconnectLogo}
										alt="logo metamask"
										height={20}
										width={20}
									/>
								) : (
									""
								)}
								{connector.name}
							</Button>
						))}
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
