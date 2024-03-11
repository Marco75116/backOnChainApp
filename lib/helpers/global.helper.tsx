export const copyToClipboard = async (text?: string): Promise<void> => {
	try {
		if (text) {
			return navigator.clipboard.writeText(text);
		}
	} catch (error) {
		throw new Error("Error while copying address");
	}
};

export const displayDecimalNumber = (
	weiBalanceBigInt: bigint,
	decimals: number,
) => {
	let weiBalanceStr = weiBalanceBigInt.toString();
	weiBalanceStr = weiBalanceStr.padStart(decimals + 1, "0");

	const position = weiBalanceStr.length - decimals;
	const etherStr = `${weiBalanceStr.substring(
		0,
		position,
	)}.${weiBalanceStr.substring(position)}`;

	const trimmedEtherStr = etherStr.replace(/\.?0+$/, "");

	return trimmedEtherStr;
};
