import { Separator } from "@/components/ui/separator";
import React from "react";
import timeRecoveryLogo from "@/lib/assets/settingsPage/timeToRecovery.svg";
import depositRecoveryLogo from "@/lib/assets/settingsPage/recoveryDeposit.svg";

import SectionSettings from "@/components/SettingsPageComponents/section-settings";

const SettingsPage = () => {
	return (
		<div className="p-6">
			<SectionSettings
				img={timeRecoveryLogo}
				label="Time to Recovery"
				placeholder="Enter the time recovery in days."
			/>
			<Separator className=" border" />
			<SectionSettings
				img={depositRecoveryLogo}
				label="Recovery Deposit"
				placeholder="Enter the deposit recovery in Eth."
			/>
		</div>
	);
};

export default SettingsPage;
