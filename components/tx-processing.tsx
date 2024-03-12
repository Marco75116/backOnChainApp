"use client";
import React from "react";
import { Badge } from "./ui/badge";
import { Loader2 } from "lucide-react";
import useProcessTxState from "@/lib/stores/processTxState.store";

const TxProcessing = () => {
	const { amountPendingTx, waitingConformation } = useProcessTxState();

	return (
		<>
			{waitingConformation && (
				<Badge className="m-1">
					Send Trasaction &nbsp;<div className="animate-bounce">...</div>
				</Badge>
			)}
			{amountPendingTx > 0 && (
				<Badge className="m-1">
					{amountPendingTx}&nbsp;
					{amountPendingTx > 1 ? "transactions pending" : "trasaction pending"}
					&nbsp; <Loader2 className="animate-spin" height={15} />
				</Badge>
			)}
		</>
	);
};

export default TxProcessing;
