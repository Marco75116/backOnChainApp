"use client";
import React, { useEffect, useMemo, useState } from "react";
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
import {
	mockWalletBalance,
	timeByBlock,
} from "@/lib/constants/constant.global";
import { useSecureTokenSelection } from "@/lib/stores/secureTokenSelection";
import {
	useAccount,
	useReadContracts,
	useWaitForTransactionReceipt,
	useWriteContract,
} from "wagmi";
import { addressBackOnChain } from "@/lib/constants/addresses";
import { abiBackOnChain } from "@/lib/constants/abis/abiBackOnChain";
import { stringToBigIntWithDecimals } from "@/lib/helpers/global.helper";
import { erc20Abi, zeroAddress } from "viem";
import { TokenBalance } from "@/lib/types/type.global";
import useProcessTxState from "@/lib/stores/processTxState.store";

type DialogSecuredAssetsProps = {
	placeholder: string;
};

const DialogSecuredAssets = ({ placeholder }: DialogSecuredAssetsProps) => {
	const [amount, setAmount] = useState<string>("0");
	const { tokensSelection, setTokensSelection } = useSecureTokenSelection();
	const { setWaitingConformation, removePendingTx, addPendingTx } =
		useProcessTxState();
	const {
		data: hash,
		isPending,
		writeContract,
	} = useWriteContract({
		mutation: {
			onSuccess() {
				addPendingTx();
			},
		},
	});
	const { isLoading: isConfirming, isSuccess: isConfirmed } =
		useWaitForTransactionReceipt({
			hash,
		});

	useEffect(() => {
		if (isConfirmed) removePendingTx();
	}, [isConfirmed, removePendingTx]);

	const { address } = useAccount();

	const tokenSelected = useMemo(() => {
		return mockWalletBalance.find((balance) => {
			return balance.symbol === tokensSelection;
		}) as TokenBalance;
	}, [tokensSelection]);

	const erc20Contract = {
		address: `${tokenSelected?.addressToken}`,
		abi: erc20Abi,
	} as const;

	const { data: dataAllowance, isSuccess: isSuccessBalanceWallet } =
		useReadContracts({
			allowFailure: false,
			contracts: [
				{
					...erc20Contract,
					functionName: "allowance",
					args: [`${address || zeroAddress}`, addressBackOnChain],
				},
				{
					...erc20Contract,
					functionName: "decimals",
				},
			],
			query: {
				refetchInterval: timeByBlock / 2,
				enabled: tokenSelected !== undefined,
			},
		});

	const amountTokenBigInt = useMemo(() => {
		return stringToBigIntWithDecimals(
			amount,
			tokenSelected?.decimals as number,
		);
	}, [amount, tokenSelected]);

	const isApproveNeeded = useMemo(() => {
		if (isSuccessBalanceWallet) {
			return amountTokenBigInt > dataAllowance?.[0];
		}
	}, [isSuccessBalanceWallet, amountTokenBigInt, dataAllowance?.[0]]);

	useEffect(() => {
		setWaitingConformation(isPending);
	}, [isPending, setWaitingConformation]);

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
									setAmount(e.target.value);
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
										<SelectItem
											key={b.symbol}
											value={b.symbol}
											onClick={() => {}}
										>
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
					<Button
						disabled={
							!amount ||
							amount === "" ||
							amount === "0" ||
							Number(amount) < 0 ||
							tokensSelection === undefined ||
							isConfirming ||
							isPending
						}
						onClick={() => {
							{
								isApproveNeeded
									? writeContract({
											address: tokenSelected.addressToken,
											abi: erc20Abi,
											functionName: "approve",
											args: [addressBackOnChain, amountTokenBigInt],
									  })
									: writeContract({
											address: addressBackOnChain,
											abi: abiBackOnChain,
											functionName: "get_ERC20",
											args: [tokenSelected?.addressToken, amountTokenBigInt],
									  });
							}
						}}
					>
						{isApproveNeeded ? "Approve " : "Validate"}
					</Button>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default DialogSecuredAssets;
