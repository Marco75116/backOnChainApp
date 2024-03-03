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
import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";

type DialogRequestRecoveryProps = {
	placeholder: string;
};

const DialogRequestRecovery = ({ placeholder }: DialogRequestRecoveryProps) => {
	const [confirm, setConfirm] = useState<boolean>(false);
	const [targetWallet, setTargetWallet] = useState<string>("");
	return (
		<Dialog>
			<DialogTrigger>
				<Button className="" variant={"outline"}>
					Recovery Request
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader className="flex items-center gap-10">
					<DialogTitle>
						<Image src={backOnchainLogo} alt="logo backOnchain" height={30} />
					</DialogTitle>
					{!confirm && (
						<>
							<DialogDescription className="flex flex-col gap-2 w-4/5 max-w-sm items-center space-x-6">
								<Input
									placeholder={placeholder}
									onChange={(e) => {
										setTargetWallet(e.target.value);
									}}
								/>
							</DialogDescription>
							<Button
								onClick={() => {
									setConfirm(true);
								}}
								disabled={targetWallet === ""}
							>
								Confirm
							</Button>
						</>
					)}
					{confirm && (
						<>
							<DialogDescription className="flex flex-col gap-2 max-w-sm items-center space-x-6">
								<div className="space-x-2">
									<span className="text-black">Target Wallet : </span>
									{targetWallet}
								</div>
								<div className="text-black text-lg">
									Pay 1.5 ETH as a deposit.
								</div>
							</DialogDescription>
							<DialogClose className="space-x-6">
								<Button
									variant={"outline"}
									onClick={() => {
										setConfirm(false);
										setTargetWallet("");
									}}
								>
									Accepte
								</Button>
								<Button
									variant={"outline"}
									onClick={() => {
										setConfirm(false);
										setTargetWallet("");
									}}
								>
									Renonce
								</Button>
							</DialogClose>
						</>
					)}
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default DialogRequestRecovery;
