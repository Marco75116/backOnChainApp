import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockWalletBalance } from "@/lib/constants/constant.global";
import Image from "next/image";
import { Button } from "../ui/button";

const TokensSection = () => {
	return (
		<div className="flex w-full h-full gap-4">
			<Card className="flex-1">
				<div className="flex flex-col h-full">
					<CardHeader>
						<CardTitle>Owerview of your portfolio of secured assets.</CardTitle>
					</CardHeader>
					<CardContent className="flex-1 flex flex-col gap-10 items-center justify-center">
						{mockWalletBalance.map((balance) => {
							const num = Math.floor(Math.random() * 100);
							return (
								<p
									className="flex px-10 w-full flex-row justify-between text-xl grid grid-rows-1 grid-cols-12"
									key={balance.addressToken}
								>
									<div className="flex flex-row gap-14 col-span-6">
										<Image src={balance.imgSrc} alt="img token" height={100} />
										<div className="flex flex-col justify-center">
											<div>{balance.symbol}</div>
											<div>
												<span className="text-muted-foreground">
													Solde Wallet :&nbsp;
												</span>
												{balance.balance} {balance.symbol}
											</div>
										</div>
									</div>

									<div className="flex items-center col-span-5 ">
										<span className="text-bcPink">
											protected by BakcOnChain :&nbsp;
										</span>
										{balance.balance + num} {balance.symbol}
									</div>
									<div className="flex items-center col-span-1 justify-end">
										<Button>Withdraw</Button>
									</div>
								</p>
							);
						})}
					</CardContent>
				</div>
			</Card>
		</div>
	);
};

export default TokensSection;
