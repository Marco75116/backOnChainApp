"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus } from "lucide-react";
import DropdownMenuItemBalance from "./dropdownMenuItemBalance";
import { mockWalletBalance } from "@/lib/constants/constant.global";
import DropdownMenuCheckboxItemBalance from "./dropdownMenuItemBalance";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const DropdownMenuBanlances = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={"outline"}>
					<Plus className="text-black" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				{mockWalletBalance.map((tokenBalance) => (
					<DropdownMenuCheckboxItemBalance
						key={tokenBalance.addressToken}
						tokenBalance={tokenBalance}
					/>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default DropdownMenuBanlances;
