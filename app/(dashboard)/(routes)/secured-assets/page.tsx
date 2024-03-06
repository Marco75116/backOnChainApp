import React from "react";
import WalletsSection from "@/components/YourWalletsComponents/walletsSection";
import DialogSecuredAssets from "@/components/SecuredAssetsComponents/dialogSecuredAssets";

const SecuredAssetsPage = () => {
	return (
		<div className="px-16 py-8 h-full flex flex-col justify-between gap-8">
			<WalletsSection />
			<div>
				<DialogSecuredAssets placeholder="Enter an amount to secure." />
			</div>
		</div>
	);
};

export default SecuredAssetsPage;
