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

type DialogSettingsProps = {
	img: StaticImageData;
	placeholder: string;
	setAmount: React.Dispatch<React.SetStateAction<number>>;
};

const DialogSettings = ({
	img,
	placeholder,
	setAmount,
}: DialogSettingsProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [inputNumber, setInputNumber] = useState<number>(0);
	return (
		<Dialog>
			<DialogTrigger>
				<Button
					onClick={() => {
						setIsOpen(true);
					}}
				>
					Modify
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader className="flex items-center gap-10">
					<DialogTitle>
						<Image src={backOnchainLogo} alt="logo backOnchain" height={30} />
					</DialogTitle>
					<DialogDescription className="flex w-4/5 max-w-sm items-center space-x-6">
						<Input
							placeholder={placeholder}
							onChange={(e) => {
								setInputNumber(Number(e.target.value));
							}}
						/>
						<Image src={img} alt="logo time recovery" height={40} />
					</DialogDescription>
					<DialogClose>
						<Button
							onClick={() => {
								setIsOpen(false);
								setAmount(inputNumber);
							}}
						>
							Confirm
						</Button>
					</DialogClose>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default DialogSettings;
