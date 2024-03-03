import DialogRequestRecovery from "@/components/RecoveryPageComponents/dialogRecuperation";
import RecoveryTable from "@/components/RecoveryPageComponents/recoveryTable/recoveryTable";
import React from "react";

const RecoveryPage = () => {
	return (
		<div className="px-16 py-8 h-full flex flex-col justify-between">
			<RecoveryTable />
			<div>
				<DialogRequestRecovery placeholder="Enter the address of the wallet to recover" />
			</div>
		</div>
	);
};

export default RecoveryPage;
