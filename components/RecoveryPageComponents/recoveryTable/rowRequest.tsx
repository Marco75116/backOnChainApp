"use client";
import React, { useMemo } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Request } from "@/lib/types/type.global";
import { Button } from "../../ui/button";
import { Copy } from "lucide-react";
import { copyToClipboard } from "@/lib/helpers/global.helper";
import { useToast } from "../../ui/use-toast";

type RowRequestProps = {
	request: Request;
};
const RowRequest = ({ request }: RowRequestProps) => {
	const { toast } = useToast();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const walletCell = useMemo(() => {
		return (
			<div className="flex flex-row items-center gap-2">
				{request.walletTarget}{" "}
				<Copy
					className="cursor-pointer hover:text-bcPink"
					onClick={() => {
						copyToClipboard(request.walletTarget)
							.then(() => {
								toast({
									variant: "success",
									description: "Wallet address copied.",
								});
							})
							.catch(() => {
								toast({
									variant: "destructive",
									description: "Error while copying address.",
								});
							});
					}}
				/>
			</div>
		);
	}, [request.walletTarget]);

	const actionCell = useMemo(() => {
		if (request.status === "pending") return <Button>Claim</Button>;
	}, [request]);

	return (
		<TableRow>
			<TableCell className="font-medium">{request.request}</TableCell>
			<TableCell className="capitalize-first">{request.status}</TableCell>
			<TableCell>{walletCell}</TableCell>
			<TableCell className="">{request.dateRequest}</TableCell>
			<TableCell className="">{request.remainDays}</TableCell>
			<TableCell className="text-right">{actionCell}</TableCell>
		</TableRow>
	);
};

export default RowRequest;
