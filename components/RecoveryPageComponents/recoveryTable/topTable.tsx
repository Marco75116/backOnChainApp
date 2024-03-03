"use client";
import React from "react";
import { Input } from "../../ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../ui/select";
import { requestTypes, requestTypesFilter } from "@/lib/types/type.global";
import { useRequestsFilter } from "@/lib/stores/requestsFilter.store";
import { Button } from "../../ui/button";
import { useAccount } from "wagmi";

const TopTable = () => {
	const { walletSearch, setWalletSearch, setRequestTypeFilter } =
		useRequestsFilter();
	const { address } = useAccount();

	return (
		<div className="flex sm:items-center py-4 pr-1  gap-2 sm:gap-8 justify-between flex-col sm:flex-row ">
			<div className="flex gap-2 sm:gap-8 flex-col sm:flex-row ">
				<div className="flex gap-2 ">
					<Input
						value={walletSearch}
						placeholder="Search a wallet..."
						onChange={(e) => {
							setWalletSearch(e.target.value);
						}}
						className=" max-w-[30rem]"
					/>
					<Button
						onClick={() => {
							setWalletSearch(address || "");
						}}
					>
						My Wallet
					</Button>
				</div>
				<Select
					defaultValue={"Request All"}
					onValueChange={(value) => {
						setRequestTypeFilter(value);
					}}
				>
					<SelectTrigger className="w-[180px]">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						{requestTypesFilter.map((requestType) => {
							return (
								<SelectItem value={requestType} key={requestType}>
									{requestType}
								</SelectItem>
							);
						})}
					</SelectContent>
				</Select>
			</div>
		</div>
	);
};

export default TopTable;
