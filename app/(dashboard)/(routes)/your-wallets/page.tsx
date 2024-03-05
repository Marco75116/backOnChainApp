import DialogYourWallets from "@/components/YourWalletsComponents/dialog-yourwallets";
import WalletsSection from "@/components/YourWalletsComponents/walletsSection";
import React from "react";

const YourWalletPage = () => {
	return (
		<div className="px-16 py-8 h-full flex flex-col justify-between gap-8">
			<WalletsSection />
			<div>
				<DialogYourWallets placeholder="Enter a super wallet address." />
			</div>
		</div>
	);
};

export default YourWalletPage;
