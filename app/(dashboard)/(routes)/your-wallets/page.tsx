import DialogYourWallets from "@/components/YourWalletsComponents/dialog-yourwallets";
import React from "react";

const YourWalletPage = () => {
	return (
		<div className="px-16 py-8 h-full flex flex-col justify-between">
			<div>
				<div>your super wallet</div>
				<div>your are their supper wallet</div>
			</div>
			<div>
				<DialogYourWallets placeholder="Enter a super wallet address." />
			</div>
		</div>
	);
};

export default YourWalletPage;
