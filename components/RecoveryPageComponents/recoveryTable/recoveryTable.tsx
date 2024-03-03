"use client";
import React, { useMemo } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import TableHeaderRequest from "./tableHeaderRequest";
import { mockRequests } from "@/lib/constants/constant.global";
import RowRequest from "./rowRequest";
import TopTable from "./topTable";
import { useRequestsFilter } from "@/lib/stores/requestsFilter.store";

const RecoveryTable = () => {
	const { walletSearch, requestTypeFilter } = useRequestsFilter();

	const requestDoplayed = useMemo(() => {
		return mockRequests
			.filter((request) => {
				if (walletSearch) {
					return request.walletTarget === walletSearch;
				}
				return true;
			})
			.filter((request) => {
				if (requestTypeFilter === "Request All") {
					return true;
				}
				return request.request === requestTypeFilter;
			});
	}, [walletSearch, requestTypeFilter]);

	return (
		<div className=" flex-1">
			<TopTable />

			<div className="rounded-md border">
				<Table>
					<TableHeaderRequest />
					<TableBody>
						{requestDoplayed.length !== 0 ? (
							requestDoplayed.map((request, i) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<RowRequest key={i} request={request} />
							))
						) : (
							<TableRow>
								<TableCell colSpan={6} className="h-24 text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export default RecoveryTable;
