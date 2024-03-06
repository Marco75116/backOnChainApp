import React from "react";
import DialogSecuredAssets from "@/components/SecuredAssetsComponents/dialogSecuredAssets";
import TokensSection from "@/components/SecuredAssetsComponents/tokensSection";

const SecuredAssetsPage = () => {
	return (
		<div className="px-16 py-8 h-full flex flex-col justify-between gap-8">
			<TokensSection />
			<div>
				<DialogSecuredAssets placeholder="Enter an amount to secure." />
			</div>
		</div>
	);
};

export default SecuredAssetsPage;
