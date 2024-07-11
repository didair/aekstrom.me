import { Box, Page } from "moonly";
import { Cube } from "../components/Cube";

class HomePage extends Page {
	render() {
		return Box({
			class: 'h-full w-full flex items-center justify-center p-8',
			children: [
				Cube(),
				Box({
					class: 'touch-only font-mono absolute bottom-4 text-sm text-gray-300',
					children: 'Use two fingers to rotate cube :)'
				}),
			]
		});
	};
};

export default HomePage;
