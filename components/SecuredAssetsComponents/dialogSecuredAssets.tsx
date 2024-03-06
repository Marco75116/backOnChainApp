"use client";
import React, { useState } from "react";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import backOnchainLogo from "@/lib/assets/logos/backOnChain.jpeg";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "../ui/button";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { mockWalletBalance } from "@/lib/constants/constant.global";
import SelectToken from "./selectToken";
import { useSecureTokenSelection } from "@/lib/stores/secureTokenSelection";

type DialogSecuredAssetsProps = {
	placeholder: string;
};

const DialogSecuredAssets = ({ placeholder }: DialogSecuredAssetsProps) => {
	const [amount, setAmount] = useState<number>(0);
	const { tokensSelection, setTokensSelection } = useSecureTokenSelection();
	console.log(tokensSelection);
	return (
		<Dialog>
			<DialogTrigger>
				<Button className="" variant={"outline"}>
					Secure your cryptos
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader className="flex items-center gap-8">
					<DialogTitle>
						<Image src={backOnchainLogo} alt="logo backOnchain" height={30} />
					</DialogTitle>

					<DialogDescription className="flex  flex-col gap-6  max-w-sm items-center space-x-6">
						<div className="center gap-4">
							<Input
								type="number"
								placeholder={placeholder}
								onChange={(e) => {
									setAmount(Number(e.target.value));
								}}
							/>
							<Select
								value={tokensSelection}
								onValueChange={(value) => {
									setTokensSelection(value);
								}}
							>
								<SelectTrigger className="w-[250px]">
									<SelectValue placeholder="Select a Token" />
								</SelectTrigger>
								<SelectContent>
									{mockWalletBalance.map((b) => (
										<SelectItem key={b.symbol} value={b.symbol}>
											<div className="flex flex-row gap-2">
												<Image src={b.imgSrc} alt="token img" height={20} />
												<div>{b.symbol}</div>
											</div>
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</DialogDescription>
					<DialogClose>
						<Button
							disabled={
								!amount || amount === 0 || tokensSelection === undefined
							}
						>
							Validate
						</Button>
					</DialogClose>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default DialogSecuredAssets;
