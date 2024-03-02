"use client";
import { Info } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import DialogSettings from "./dialog-settings";

type SectionSettingsProps = {
	img: StaticImageData;
	label: string;
	placeholder: string;
};
const SectionSettings = ({ img, label, placeholder }: SectionSettingsProps) => {
	const [amount, setAmount] = useState<number>(5);
	return (
		<div className="flex items-center w-4/5 justify-between px-20 py-10 ">
			<div className="flex flex-row gap-6">
				<Image src={img} alt="logo time recovery" />
				<div>
					<div className="py-2 flex flex-col gap-2">
						{label}
						<span className="text-sm text-muted-foreground">
							{amount} {label === "Time to Recovery" ? "Days" : "ETH"}
						</span>
					</div>
				</div>
				<div className="py-3">
					<Info height={20} />
				</div>
			</div>
			<DialogSettings
				img={img}
				placeholder={placeholder}
				setAmount={setAmount}
			/>
		</div>
	);
};

export default SectionSettings;
