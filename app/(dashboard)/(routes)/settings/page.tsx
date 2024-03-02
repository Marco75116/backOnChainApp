import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";
import timeRecoveryLogo from "@/lib/assets/settingsPage/timeToRecovery.svg";
import depositRecoveryLogo from "@/lib/assets/settingsPage/recoveryDeposit.svg";
import Image from "next/image";
import { Info } from "lucide-react";

const SettingsPage = () => {
	return (
		<div className="p-6">
			<div className="flex items-center w-4/5 justify-between px-20 py-10 ">
				<div className="flex flex-row gap-6">
					<Image src={timeRecoveryLogo} alt="logo time recovery" />
					<div>
						<div className="py-2 flex flex-col gap-2">
							Time to Recovery
							<span className="text-sm text-muted-foreground">120 days</span>
						</div>
					</div>
					<div className="py-3">
						<Info height={20} />
					</div>
				</div>
				<Button>Modify</Button>
			</div>
			<Separator className=" border" />
			<div className="flex items-center w-4/5 justify-between px-20 py-10 ">
				<div className="flex flex-row gap-6">
					<Image src={depositRecoveryLogo} alt="logo time recovery" />
					<div>
						<div className="py-2 flex flex-col gap-2">
							Recovery Deposit
							<span className="text-sm text-muted-foreground">5 ETH</span>
						</div>
					</div>
					<div className="py-3">
						<Info height={20} />
					</div>
				</div>
				<Button>Modify</Button>
			</div>
		</div>
	);
};

export default SettingsPage;
