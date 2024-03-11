"use client";
import { TokenBalance } from "@/lib/types/type.global";
import React, { useMemo } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useAccount, useReadContracts } from "wagmi";
import { erc20Abi, zeroAddress } from "viem";
import { displayDecimalNumber } from "@/lib/helpers/global.helper";
import { timeByBlock } from "@/lib/constants/constant.global";

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

	const { data, dataUpdatedAt, isSuccess, isError } = useReadContracts({
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

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const balance = useMemo(() => {
		if (isSuccess) {
			const balance = Number(displayDecimalNumber(data?.[0], data?.[1]));
			return balance;
		}
		return "0";
	}, [isSuccess, data]);

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
						{balance} {tokenBalance.symbol}
					</div>
				</div>
			</div>

			<div className="flex items-center col-span-5 ">
				<span className="text-bcPink">protected by BakcOnChain :&nbsp;</span>
				{tokenBalance.balance + num} {tokenBalance.symbol}
			</div>
			<div className="flex items-center col-span-1 justify-end">
				<Button>Withdraw</Button>
			</div>
		</p>
	);
};

export default TokenSection;
