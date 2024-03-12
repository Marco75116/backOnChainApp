import Image from "next/image";
import React from "react";
import backOnchainLogo from "@/lib/assets/logos/backOnChain.jpeg";
import AddressDiplayed from "./addressDiplayed";
import Menu from "./menu/menu";
import Networkbadge from "../networkbadge";

const Header = () => {
	return (
		<div className="flex flex-col w-full px-12 py-4 gap-4 ">
			<div className="flex justify-between">
				<Image src={backOnchainLogo} alt="logo backOnchain" />
				<Networkbadge />
			</div>
			<AddressDiplayed />
			<Menu />
		</div>
	);
};

export default Header;
