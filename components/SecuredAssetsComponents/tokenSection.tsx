"use client";
import { TokenBalance } from "@/lib/types/type.global";
import React, { useMemo } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useAccount, useReadContracts } from "wagmi";
import { erc20Abi, zeroAddress } from "viem";
import { displayDecimalNumber } from "@/lib/helpers/global.helper";
import { timeByBlock } from "@/lib/constants/constant.global";
import { abiBackOnChain } from "@/lib/constants/abis/abiBackOnChain";
import { addressBackOnChain } from "@/lib/constants/addresses";

type TokenSectionProps = {
	tokenBalance: TokenBalance;
};

const TokenSection = ({ tokenBalance }: TokenSectionProps) => {
	const { address } = useAccount();
	const num = Math.floor(Math.random() * 100);

	const erc20Contract = {
		address: `${tokenBalance.addressToken}`,
		abi: erc20Abi,
	} as const;

	const backOnChainContract = {
		address: addressBackOnChain,
		abi: abiBackOnChain,
	} as const;

	const { data: dataBalanceWallet, isSuccess: isSuccessBalanceWallet } =
		useReadContracts({
			allowFailure: false,
			contracts: [
				{
					...erc20Contract,
					functionName: "balanceOf",
					args: [`${address || zeroAddress}`],
				},
				{
					...erc20Contract,
					functionName: "decimals",
				},
				{
					...erc20Contract,
					functionName: "symbol",
				},
			],
			query: {
				refetchInterval: timeByBlock,
			},
		});

	const { data, isSuccess } = useReadContracts({
		allowFailure: false,
		contracts: [
			{
				...backOnChainContract,
				functionName: "tokens_ERC20",
				args: [
					`${address || zeroAddress}`,
					`${tokenBalance.addressToken || zeroAddress}`,
				],
			},
		],
		query: {
			refetchInterval: timeByBlock,
		},
	});

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const balanceWallet = useMemo(() => {
		if (isSuccessBalanceWallet) {
			const balance = Number(
				displayDecimalNumber(dataBalanceWallet?.[0], dataBalanceWallet?.[1]),
			);
			return balance;
		}
		return "0";
	}, [isSuccess, dataBalanceWallet]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const balanceBackOnChain = useMemo(() => {
		if (isSuccess && isSuccessBalanceWallet) {
			const balance = Number(
				displayDecimalNumber(data?.[0] as bigint, dataBalanceWallet?.[1]),
			);
			return balance;
		}
		return "0";
	}, [isSuccess, isSuccessBalanceWallet, data]);

	return (
		<p
			className="px-10 w-full flex-row justify-between text-xl grid grid-rows-1 grid-cols-12"
			key={tokenBalance.addressToken}
		>
			<div className="flex flex-row gap-14 col-span-6">
				<Image src={tokenBalance.imgSrc} alt="img token" height={100} />
				<div className="flex flex-col justify-center">
					<div>{tokenBalance.symbol}</div>
					<div>
						<span className="text-muted-foreground">
							Balance Wallet :&nbsp;
						</span>
						{balanceWallet} {tokenBalance.symbol}
					</div>
				</div>
			</div>

			<div className="flex items-center col-span-5 ">
				<span className="text-bcPink">protected by BackOnChain :&nbsp;</span>
				{balanceBackOnChain} {tokenBalance.symbol}
			</div>
			<div className="flex items-center col-span-1 justify-end">
				<Button>Withdraw</Button>
			</div>
		</p>
	);
};

export default TokenSection;
