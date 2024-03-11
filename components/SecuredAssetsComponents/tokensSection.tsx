import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockWalletBalance } from "@/lib/constants/constant.global";
import TokenSection from "./tokenSection";

const TokensSection = () => {
	return (
		<div className="flex w-full h-full gap-4">
			<Card className="flex-1">
				<div className="flex flex-col h-full">
					<CardHeader>
						<CardTitle>Owerview of your portfolio of secured assets.</CardTitle>
					</CardHeader>
					<CardContent className="flex-1 flex flex-col gap-10 items-center justify-center">
						{mockWalletBalance.map((balance) => (
							<TokenSection tokenBalance={balance} key={balance.addressToken} />
						))}
					</CardContent>
				</div>
			</Card>
		</div>
	);
};

export default TokensSection;
