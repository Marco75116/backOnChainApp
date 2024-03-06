import { TokenBalance } from "@/lib/types/type.global";
import { SelectItem } from "@radix-ui/react-select";
import React from "react";

type SelectTokenProps = {
	tokenBalance: TokenBalance;
};
const SelectToken = ({ tokenBalance }: SelectTokenProps) => {
	return (
		<SelectItem value={tokenBalance.symbol}>{tokenBalance.symbol}</SelectItem>
	);
};

export default SelectToken;
