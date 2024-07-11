import { Box, Page } from "moonly";
// import { Donut } from "../components/Donut";
import { Cube } from "../components/Cube";

class HomePage extends Page {
	render() {
		return Box({
			class: 'h-full w-full flex items-center justify-center p-8',
			children: [
				Cube(),
			]
		});
	};
};

export default HomePage;
