import { Wallet } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import ethLogo from "@/lib/assets/tokens/ethereum.png";
import { SuperWallet } from "@/lib/types/type.global";

type YourSuperWalletProps = {
	superWallet: SuperWallet;
};
const YourSuperWallet = ({ superWallet }: YourSuperWalletProps) => {
	return (
		<p className="flex w-full flex-row justify-between ">
			<Wallet height={50} width={50} />
			<div className="flex flex-row space-x-6">
				<div>
					<div>
						<span className="font-bold"> address : </span>
						{superWallet.wallet}
					</div>
					<div>
						<span className="font-bold">time to recovery </span> :{" "}
						{superWallet.timeToRecovery} days
					</div>
				</div>
				<div className="flex  gap-2">
					<div className="w-6">
						<Image src={ethLogo} alt="eth logo" />
					</div>
					<div>{superWallet.numberTokens} tokens</div>
				</div>
			</div>
			<Button>revoke </Button>
		</p>
	);
};

export default YourSuperWallet;
