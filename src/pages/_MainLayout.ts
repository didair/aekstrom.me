import { Box } from "moonly";
import Header from "../components/Header";

const MainLayout = (outlet) => {
	return [
		Header(),
		Box({
			class: "flex h-full justify-between",
			children: [outlet]
		}),
	]
};

export default MainLayout;
