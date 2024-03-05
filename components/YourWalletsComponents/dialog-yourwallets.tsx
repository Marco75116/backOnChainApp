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
import DropdownMenuBanlances from "./dropDownMenu/dropdownMenuBanlances";
import { useTokensBalanceSelection } from "@/lib/stores/balanceTokenSelection";

type DialogRequestRecoveryProps = {
	placeholder: string;
};

const DialogYourWallets = ({ placeholder }: DialogRequestRecoveryProps) => {
	const [targetWallet, setTargetWallet] = useState<string>("");
	const { tokensSelection } = useTokensBalanceSelection();
	return (
		<Dialog>
			<DialogTrigger>
				<Button className="" variant={"outline"}>
					Recovery Request
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader className="flex items-center gap-8">
					<DialogTitle>
						<Image src={backOnchainLogo} alt="logo backOnchain" height={30} />
					</DialogTitle>

					<DialogDescription className="flex  flex-col gap-6 w-4/5 max-w-sm items-center space-x-6">
						<Input
							placeholder={placeholder}
							onChange={(e) => {
								setTargetWallet(e.target.value);
							}}
						/>
						<div className="center gap-4">
							{tokensSelection.length} token selected <DropdownMenuBanlances />
						</div>
					</DialogDescription>
					<DialogClose>
						<Button
							disabled={targetWallet === "" || tokensSelection.length === 0}
						>
							Validate
						</Button>
					</DialogClose>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default DialogYourWallets;
