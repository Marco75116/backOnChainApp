import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import YourSuperWallet from "./yourSuperWallet";
import { mockYourSuperWallets } from "@/lib/constants/constant.global";

const WalletsSection = () => {
	return (
		<div className="flex w-full h-full gap-4">
			<Card className="flex-1">
				<div className="flex flex-col h-full">
					<CardHeader>
						<CardTitle>Your Super Wallets</CardTitle>
					</CardHeader>
					<CardContent className="flex-1 flex flex-col justify-center gap-10">
						{mockYourSuperWallets.map((superWallet) => {
							return (
								<YourSuperWallet
									key={superWallet.wallet}
									superWallet={superWallet}
								/>
							);
						})}
					</CardContent>
				</div>
			</Card>
			<Card className="flex-1">
				<div className="flex flex-col h-full">
					<CardHeader>
						<CardTitle>Wallets for which you are their Super Wallet</CardTitle>
					</CardHeader>
					<CardContent className="flex-1 flex items-center justify-center">
						<p>No wallet has granted you its trust at the moment...</p>
					</CardContent>
				</div>
			</Card>
		</div>
	);
};

export default WalletsSection;
