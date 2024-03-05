"use client";
import React, { useMemo } from "react";
import { DropdownMenuCheckboxItem } from "../../ui/dropdown-menu";
import Image from "next/image";
import { TokenBalance } from "@/lib/types/type.global";
import { useTokensBalanceSelection } from "@/lib/stores/balanceTokenSelection";

type DropdownMenuItemBalanceProps = {
	tokenBalance: TokenBalance;
};

const DropdownMenuCheckboxItemBalance = ({
	tokenBalance,
}: DropdownMenuItemBalanceProps) => {
	const { tokensSelection, addTokenToSelection, removeTokenToSelection } =
		useTokensBalanceSelection();

	const isChecked = useMemo(() => {
		return tokensSelection.includes(tokenBalance);
	}, [tokensSelection, tokenBalance]);

	return (
		<DropdownMenuCheckboxItem
			className="gap-2"
			checked={isChecked}
			onCheckedChange={(value) => {
				if (value) {
					addTokenToSelection(tokenBalance);
				} else {
					removeTokenToSelection(tokenBalance);
				}
			}}
		>
			<Image src={tokenBalance.imgSrc} alt="token" height={35} />
			<div className="flex gap-1 center">
				<div className="text-lg">{tokenBalance.balance}</div>
				<div className="text-lg"> {tokenBalance.symbol}</div>
			</div>
		</DropdownMenuCheckboxItem>
	);
};

export default DropdownMenuCheckboxItemBalance;
