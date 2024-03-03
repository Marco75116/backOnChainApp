import React from "react";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TableHeaderRequest = () => {
	return (
		<TableHeader>
			<TableRow>
				<TableHead className="">Request Type</TableHead>
				<TableHead className="">Status</TableHead>
				<TableHead className="">Target Wallet</TableHead>
				<TableHead className="">Date Request</TableHead>
				<TableHead className="">Remain Days</TableHead>
				<TableHead className="text-right">Action</TableHead>
			</TableRow>
		</TableHeader>
	);
};

export default TableHeaderRequest;
